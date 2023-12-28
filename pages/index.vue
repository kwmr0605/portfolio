<template>
  <div class="top">
    <div class="main-visual">
      <img class="image" src="~/assets/image/top.jpeg" alt="top" />
      <div class="greetings">
        <h1 class="greetings-title">Hello,</h1>
        <p>
          初めまして。<br />
          フルスタックエンジニアとして働いています。
        </p>
        <p>
          このサイトは、普段勉強したことを備忘録として記すためのサイトです。
        </p>
        <div class="greetings-link">
          <nuxt-link class="link" to="/about">More Profile →</nuxt-link>
        </div>
      </div>
    </div>
    <div class="contents">
      <h2 class="contents-title">Contents</h2>
      <div v-for="content in contents" :key="content.id" class="contents-area">
        <div class="article">
          <img
            class="article-icon"
            src="~/assets/image/blog.png"
            alt="article-icon"
          />
          <div class="article-text-area">
            <p class="article-createdat">
              {{ content.publishedAt | formatDate }}
            </p>
            <nuxt-link :to="`/blog/${content.id}`" class="link" href="#">
              {{ content.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="contents-link">
        <nuxt-link class="link" to="/blog">More Contents →</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get(
      process.env.API_URL + 'blog?orders=-publishedAt&limit=5',
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )
    return data
  },

  head() {
    return {
      title: 'Top',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/mixin';
@import '~/assets/sass/variables';

.top {
  color: var(--color-secondary);
  margin: 0 15%;
  transition: all var(--base-transition);

  @include mq(md) {
    margin: 0 5%;
  }

  .main-visual {
    display: flex;
    margin-bottom: 100px;
    width: 100%;

    @include mq(md) {
      display: block;
    }

    .image {
      float: left;
      height: 40%;
      mix-blend-mode: multiply;
      object-fit: cover;
      width: 40%;

      @include mq(md) {
        float: none;
        width: 100%;
      }
    }

    .greetings {
      margin-left: 10%;
      margin-top: 100px;

      @include mq(md) {
        margin: 0;
        width: 100%;
      }

      .greetings-title {
        font-size: 40px;
        margin: 0 0 30px;
      }

      .greetings-link {
        margin-top: 50px;
        text-align: right;
      }
    }
  }

  .contents {
    display: block;
    height: auto;
    margin: 0;

    @include mq(md) {
      margin: 0;
      width: 100%;
    }

    .contents-title {
      display: block;
      font-size: 40px;
      margin: 0 0 30px;
      width: 100%;
    }

    .contents-area {
      margin-bottom: 20px;

      .article-icon {
        float: left;
        height: 100px;
        margin-right: 50px;
        mix-blend-mode: multiply;
        width: 100px;

        @include mq(md) {
          margin-right: 0;
        }
      }

      .article-text-area {
        display: table-cell;
        height: 100px;
        vertical-align: middle;

        @include mq(md) {
          display: block;
          padding-top: 10px;
          vertical-align: unset;
        }

        .article-createdat {
          font-size: 10px;
          margin: 0;
        }

        .article-title {
          margin: 0 0 10px 0;
        }
      }
    }

    .contents-link {
      margin-top: 50px;
      text-align: right;
    }
  }
}
</style>
