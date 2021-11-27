<template>
  <div class="article">
    <h1 class="article-title">
      {{ title }}
    </h1>
    <div class="article-date">
      <p class="article-published-date">
        公開日：{{ publishedAt | formatDate }}
      </p>
      <p class="article-updated-date">
        最終更新日：{{ updatedAt | formatDate }}
      </p>
    </div>
    <div class="article-category-area">
      カテゴリー:
      <p
        v-for="category in category"
        :key="category.id"
        class="article-category"
      >
        #{{ category.category }}
      </p>
    </div>
    <div class="post" v-html="body" />
    <div class="sns-area">
      <h2>Share</h2>
      <ul class="sns">
        <li>
          <a
            :href="twitterURL"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <font-awesome-icon
              alt="twitter"
              class="twitter-icon"
              :icon="['fab', 'twitter']"
            />
          </a>
        </li>
        <li>
          <a
            :href="facebookURL"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <font-awesome-icon
              alt="facebook"
              class="facebook-icon"
              :icon="['fab', 'facebook-f']"
            />
          </a>
        </li>
        <li>
          <a :href="lineURL" target="_blank" rel="nofollow noopener noreferrer">
            <font-awesome-icon
              alt="line"
              class="line-icon"
              :icon="['fab', 'line']"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cheerio from 'cheerio'
import hljs from 'highlight.js'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      process.env.API_URL + `blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )
    const $ = cheerio.load(data.body)
    $('code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })

    return {
      ...data,
      body: $.html(),
    }
  },

  computed: {
    url() {
      const baseUrl = process.env.BASE_URL
      return baseUrl + this.$route.path
    },

    fixedTitle() {
      return encodeURIComponent(`【${this.title}】`)
    },

    fixedContent() {
      return encodeURIComponent(`【${this.title}】 ${this.url}`)
    },

    twitterURL() {
      return `https://twitter.com/intent/tweet?url=${this.url}&text=${this.fixedTitle}&hashtags=rbell`
    },

    facebookURL() {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.url}&t=${this.fixedTitle}`
    },

    lineURL() {
      return `http://line.me/R/msg/text/?${this.fixedContent}`
    },
  },

  head() {
    const url = process.env.BASE_URL + this.$route.path
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, ''),
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url,
        },
        { hid: 'og/type', property: 'og:type', content: 'article' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/mixin';
@import '~/assets/sass/variables';

.article {
  color: var(--color-secondary);
  height: auto;
  min-height: 1000px;
  margin: 0 15%;
  transition: all var(--base-transition);

  @include mq(md) {
    margin: 0 5%;
  }

  .article-title {
    margin-bottom: 10px;

    @include mq(md) {
      font-size: 24px;
    }
  }

  .article-date {
    margin-bottom: 10px;

    .article-published-date {
      display: inline-block;
      margin-right: 10px;

      @include mq(md) {
        display: block;
        margin: 0;
      }
    }

    .article-updated-date {
      display: inline-block;

      @include mq(md) {
        display: block;
      }
    }
  }

  .article-category-area {
    display: block;
    margin-bottom: 50px;

    .article-category {
      display: inline-block;
      margin-right: 10px;
      width: max-content;
    }
  }

  .sns-area {
    margin-top: 100px;

    h2 {
      margin-top: 0;
    }

    .sns {
      display: flex;
      list-style: none;
      margin-top: 20px;
      padding: 0;

      a {
        border: 1px solid var(--color-secondary);
        border-radius: 50%;
        color: var(--color-secondary);
        display: block;
        font-size: 24px;
        height: 50px;
        margin-right: 15px;
        position: relative;
        width: 50px;

        &:hover {
          .twitter-icon {
            color: #00aced;
            transition: color var(--base-transition);
          }

          .facebook-icon {
            color: #305097;
            transition: color var(--base-transition);
          }

          .line-icon {
            color: #1dcd00;
            transition: color var(--base-transition);
          }
        }

        .twitter-icon,
        .facebook-icon,
        .line-icon {
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: color 0.3s;
        }
      }
    }
  }
}
</style>
