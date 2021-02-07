<template>
  <div class="blog">
    <div class="search-box">
      <select v-model="selectCategory" class="category-list" name="category">
        <option class="category-item" value="">全てのカテゴリー</option>
        <option
          v-for="(category, index) in categories"
          :key="`category-${index}`"
          class="category-item"
          :value="category.id"
        >
          {{ category.category }}
        </option>
      </select>
      <input
        v-model="searchQuery"
        type="text"
        class="search-query"
        placeholder="キーワード検索"
      />
      <font-awesome-icon
        :icon="['fas', 'search']"
        class="search-icon"
        @click="search(0)"
      />
    </div>
    <div class="article-result">
      <div v-if="contents.length == 0" class="article-not-found">
        <h2>記事が見つかりませんでした</h2>
        <p>検索条件を変更して再度検索してください。</p>
      </div>
      <article
        v-for="(content, index) in contents"
        :key="`article-${index}`"
        class="article-list"
      >
        <img
          class="article-icon"
          src="~/assets/image/blog.png"
          alt="article-icon"
        />
        <div class="article-text-area">
          <p class="article-created-at">
            {{ content.publishedAt | formatDate }}
          </p>
          <nuxt-link :to="`/blog/${content.id}`" class="link">
            {{ content.title }}
          </nuxt-link>
        </div>
      </article>
    </div>
    <div class="pagination-area">
      <ul class="pagination">
        <li v-if="page != 0" class="prev" @click="showPrev()">
          <font-awesome-icon :icon="['fas', 'angle-left']" class="next-icon" />
        </li>
        <li
          v-for="index in neighborPages"
          :key="index"
          class="number"
          :class="{ selectPage: page == index }"
          @click="showPage(index)"
        >
          {{ index + 1 }}
        </li>
        <li v-if="(page + 1) * 10 < numFound" class="next" @click="showNext()">
          <font-awesome-icon :icon="['fas', 'angle-right']" class="next-icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const data = await axios.get(
      process.env.API_URL + 'blog?orders=-publishedAt&limit=10',
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )

    const categories = await axios.get(process.env.API_URL + 'category', {
      headers: { 'X-API-KEY': process.env.API_KEY },
    })

    let fromOneToNinePage = 9
    if (data.data.totalCount < 90) {
      fromOneToNinePage = data.data.totalCount / 10
    }

    return {
      contents: data.data.contents,
      categories: categories.data.contents,
      numFound: data.data.totalCount,
      fromOneToNinePage,
    }
  },

  data() {
    return {
      // ローディングflag
      loadingActive: false,
      // 検索キーワード
      searchQuery: '',
      // 検索結果
      contents: {},
      // APIから取得したカテゴリー
      categories: {},
      // 選択したカテゴリー
      selectCategory: '',
      // 全件結果
      numFound: 0,
      // 現在のページ数
      page: 0,
      // ページネーションで表示するインデックス数
      showPageCount: 9,
      // 1ページ目から9ページ目検索結果の10分の1の数
      fromOneToNinePage: 0,
    }
  },

  computed: {
    // ページ数のカウント取得
    pageCount() {
      return this.numFound % 10 === 0
        ? Math.floor(this.numFound / 9)
        : Math.floor(this.numFound / 10)
    },

    // ペーンジネーションの表示する数字を取得
    neighborPages() {
      const sidePageCount = Math.floor(this.showPageCount / 2)

      let start = 0
      let end = 0

      if (
        Math.floor((this.numFound - 1) / 10) >= -1 &&
        (this.numFound - 1) / 10 <= this.fromOneToNinePage
      ) {
        start = 0
        if (this.numFound === 0) {
          end = -1
        } else if (this.numFound <= 10) {
          end = 0
        } else {
          end = Math.floor((this.numFound - 1) / 10)
        }
      } else {
        start =
          Math.max(
            Math.min(this.pageCount, this.page + sidePageCount),
            this.showPageCount
          ) - 9
        end = Math.max(
          Math.min(this.pageCount, this.page + sidePageCount),
          this.showPageCount
        )
      }

      const pages = []
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      return pages
    },
  },

  methods: {
    search(pageNum) {
      // ローディング表示
      this.loadingActive = true
      // ページネーションの設定
      if (pageNum > 0) {
        pageNum = this.page * 10
      } else {
        this.page = pageNum
      }

      const keyword =
        this.searchQuery === undefined ||
        this.searchQuery === '' ||
        this.searchQuery == null
          ? ''
          : this.searchQuery

      let searchUrl =
        process.env.API_URL +
        `blog?orders=-publishedAt&limit=10&q=${keyword}&offset=${pageNum}`
      if (
        this.selectCategory != null &&
        this.selectCategory !== '' &&
        this.selectCategory !== undefined
      ) {
        searchUrl += `&filters=category[contains]${this.selectCategory}`
      }

      axios
        .get(searchUrl, {
          headers: { 'X-API-KEY': process.env.API_KEY },
        })
        .then((response) => {
          this.numFound = response.data.totalCount
          if (this.numFound >= 90) {
            this.fromOneToNinePage = 9
          } else {
            this.fromOneToNinePage = this.numFound / 10
          }

          this.contents = response.data.contents
        })
        .finally(() => {
          // ローディング非表示
          this.loadingActive = false
        })
    },

    scrollTop() {
      window.scrollTo({
        top: 0,
      })
    },

    showPrev() {
      if (this.isStartPage) {
        return
      }
      this.page--
      this.search(this.page)
      this.scrollTop()
    },

    showNext() {
      if (this.isEndPage) {
        return
      }
      this.page++
      this.search(this.page)
      this.scrollTop()
    },

    showPage(index) {
      if (this.page === index) {
        return false
      }

      this.page = index
      this.search(this.page)
      this.scrollTop()
    },
  },
  head() {
    return {
      title: 'Blog',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/mixin';
@import '~/assets/sass/variables';

.blog {
  color: var(--color-secondary);
  margin: 0 15%;
  transition: all var(--base-transition);

  @include mq(md) {
    margin: 0 5%;
  }

  .search-box {
    border: 1px solid var(--color-secondary);
    border-radius: 100px;
    display: flex;
    height: 50px;
    transition: all var(--base-transition);
    width: 100%;

    @include mq(md) {
      border-radius: 10px;
      display: block;
      height: 100px;
    }

    .category-list {
      background: transparent;
      border: none;
      color: var(--color-secondary);
      cursor: pointer;
      padding: 0 10px;
      transition: all var(--base-transition);
      width: 25%;
      -webkit-appearance: none;

      @include mq(md) {
        border-bottom: 1px solid var(--color-secondary);
        border-radius: 0;
        font-size: 16px;
        height: 50px;
        padding: 0 20px;
        width: 100%;
      }

      &:focus {
        outline: none;
      }
    }

    .search-query {
      background: transparent;
      border: none;
      color: var(--color-secondary);
      padding: 0 20px;
      width: 65%;

      @include mq(md) {
        font-size: 16px;
        height: 50px;
        width: 80%;
      }

      @include mq(sm) {
        padding-left: 20px;
        width: 70%;
      }

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #a9a9a9;
      }
    }

    .search-icon {
      cursor: pointer;
      font-size: 20px;
      margin: auto;
    }
  }

  .article-result {
    min-height: 700px;

    .article-not-found {
      margin-top: 50px;

      p {
        margin-top: 25px;
      }
    }

    .article-list {
      margin-top: 50px;

      .article-icon {
        float: left;
        height: 100px;
        margin-right: 50px;
        mix-blend-mode: multiply;
        width: 100px;

        @include mq(md) {
          height: 50px;
          margin-right: 20px;
          width: 50px;
        }
      }

      .article-text-area {
        display: table-cell;
        height: 100px;
        vertical-align: middle;

        @include mq(md) {
          display: block;
          vertical-align: unset;
        }

        .article-created-at {
          font-size: 10px;
          margin: 0;
        }

        .article-title {
          margin: 0 0 10px 0;
        }
      }
    }
  }

  .pagination-area {
    font-size: 16px;
    margin-top: 100px;
    width: 100%;

    .pagination {
      display: flex;
      justify-content: center;

      li {
        cursor: pointer;
        list-style: none;
        margin: 0 10px;
        transition: color 0.3s;

        &.selectPage {
          color: #a9a9a9;

          &:hover {
            color: #a9a9a9;
          }
        }

        &:hover {
          color: #a9a9a9;
          transition: color 0.3s;
        }
      }
    }
  }
}
</style>
