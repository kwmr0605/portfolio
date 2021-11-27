<template>
  <div class="cg">
    <div class="main-visual">
      <img class="image" src="~/assets/image/works/cg.png" alt="craftgarage" />
      <h1 class="cg-title">
        Craft&nbsp;Garage&nbsp;Guitars&nbsp;&amp;&nbsp;Basses
      </h1>
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
      <p>
        青森県弘前市のギター・ベース修理の個人工房「Craft&nbsp;Garage&nbsp;Guitars&nbsp;&amp;&nbsp;Basses」のHPを制作いたしました。
      </p>
      <p>
        企画から始まり、設計やデザイン作成、コーディングにリリースまで全て担当いたしました。<br />
        親戚からのご依頼ということもあって色々自由がきいたため、HP内ブログの希望はmicroCMSで対応しました。<br />
        サイト内に設置したformはNetlifyFormを利用し、お問い合わせ時にはお店にメールが配信されるようになっています。
      </p>
      <p>
        土日の作業のため、ご依頼を受けてから納品まで約半年ほどかかりました。
      </p>
      <div class="detail-link">
        <a
          class="link"
          href="https://craftgarage-guitars.com/"
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

.cg {
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

    .cg-title {
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
