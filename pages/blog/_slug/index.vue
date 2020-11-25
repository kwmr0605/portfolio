<template>
  <div class="article">
    <h1 class="article-title">
      {{ title }}
    </h1>
    <p class="article-published-date">公開日：{{ publishedAt | formatDate }}</p>
    <p class="article-updated-date">最終更新日：{{ updatedAt | formatDate }}</p>
    <div class="post" v-html="body" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      process.env.API_URL + `blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )
    return data
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

  .article-title {
    margin-bottom: 10px;
  }

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
    margin-bottom: 50px;

    @include mq(md) {
      display: block;
    }
  }
}
</style>
