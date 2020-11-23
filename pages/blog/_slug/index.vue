<template>
  <div class="article">
    <h1 class="article-title">
      {{ title }}
    </h1>
    <p class="article-date">
      公開日：{{ publishedAt | formatDate }}&nbsp;&nbsp;&nbsp;最終更新日：{{
        updatedAt | formatDate
      }}
    </p>
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
.article {
  height: auto;
  min-height: 1000px;
  margin: 0 15%;

  .article-title {
    margin-bottom: 10px;
  }

  .article-date {
    margin-bottom: 50px;
  }
}
</style>
