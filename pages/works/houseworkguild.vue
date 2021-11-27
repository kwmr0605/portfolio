<template>
  <div class="hwg">
    <div class="main-visual">
      <img
        class="image"
        src="~/assets/image/works/hwg.png"
        alt="housework guild"
      />
      <h1 class="hwg-title">Housework Guild</h1>
      <ul class="list">
        <li class="item">Java</li>
        <li class="item">SpringBoot</li>
        <li class="item">Nuxt.js</li>
        <li class="item">MySQL</li>
        <li class="item">OAuth</li>
        <li class="item">Linux</li>
        <li class="item">Apache</li>
        <li class="item">Tomcat</li>
        <li class="item">microCMS</li>
        <li class="item">Github</li>
        <li class="item">Google Analytics</li>
        <li class="item">adobe XD</li>
        <li class="item">design</li>
      </ul>
    </div>
    <div class="detail">
      <h2 class="title">Detail</h2>
      <p>
        「毎日の家事を少しだけ前向きにする」をテーマに作った家事ポイントサービスです。
      </p>
      <p>
        家事のポイントを自分で設定し、家事を実施するごとにポイントを貯めることができます。<br />
        そして貯まったポイントは自分で設定したインセンティブと交換することができます。
      </p>
      <p>
        自分で使うためだけに作ったので広報活動はしておりませんが、<br />
        念の為誰でも使えるようにGoogleアカウントによるログイン機能(OAuth)をつけています。
      </p>
      <p>他にも、SNSのような画像投稿機能みたいなものも搭載しています。</p>
      <div class="detail-link">
        <a class="link" href="https://houseworkguild.com/" target="_blank">
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

.hwg {
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

    .hwg-title {
      font-size: 40px;
      overflow-wrap: break-word;
      word-wrap: break-word;
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
