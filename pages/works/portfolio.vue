<template>
  <div class="pf">
    <div class="main-visual">
      <img class="image" src="~/assets/image/works/rbell.png" alt="portfolio" />
      <h1 class="pf-title">Portfolio</h1>
      <ul class="list">
        <li class="item">Nuxt.js</li>
        <li class="item">Netlify</li>
        <li class="item">microCMS</li>
        <li class="item">Github</li>
        <li class="item">Google Analytics</li>
        <li class="item">adobe XD</li>
        <li class="item">design</li>
      </ul>
    </div>
    <div class="detail">
      <h2 class="title">Detail</h2>
      <p>私のポートフォリオサイトです。</p>
      <p>
        後で自分が見返すために技術的な記事を投稿しています。<br />
        「あれなんだったっけ...」のような調べ物をする際に自分のポートフォリオで解決できたら...という思いでゆっくりナレッジを貯めています。
      </p>
      <p>
        ちなみにrbellという名前は「ring&nbsp;a&nbsp;bell(ピンとくる、感覚的に思い出す)」から来ています。
      </p>
      <div class="detail-link">
        <a
          class="link"
          href="https://rbell.jp/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          View Site →
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import workList from '~/assets/data/workList.js'

export default {
  computed: {
    workList: () => workList,
  },

  head() {
    return {
      title: 'Works',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/mixin';
@import '~/assets/sass/variables';

.pf {
  color: var(--color-secondary);
  margin: 0 15%;
  transition: all var(--base-transition);

  @include mq(md) {
    margin: 0 5%;
  }

  .main-visual {
    margin-bottom: 100px;
    width: 100%;

    .image {
      margin-bottom: 30px;
      width: 100%;
    }

    .pf-title {
      font-size: 40px;
    }

    .list {
      list-style: none;
      padding: 0;

      .item {
        border: 1px solid var(--color-secondary);
        border-radius: 2px;
        color: var(--color-secondary);
        display: inline-block;
        font-size: 16px;
        margin-bottom: 10px;
        margin-right: 10px;
        padding: 0.15em 0.8em 0.05em;
      }
    }
  }

  .detail {
    .title {
      font-size: 40px;
      margin-bottom: 30px;
    }

    p {
      margin-bottom: 30px;
    }

    .detail-link {
      margin-top: 50px;
      text-align: right;
    }
  }
}
</style>
