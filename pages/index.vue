<template>
  <div class="top">
    <div class="main-visual">
      <img class="image" src="~/assets/image/top.png" />
      <div class="greetings">
        <h1 class="greetings-title">Hello,</h1>
        <p>
          初めまして。<br />
          フロントエンドエンジニアとして働いています。
        </p>
        <p>
          このサイトは、普段勉強したことを備忘録として記すためのサイトです。
        </p>
        <div class="greetings-link">
          <a class="link" href="/about">More Profile →</a>
        </div>
      </div>
    </div>
    <div class="contents">
      <h2 class="contents-title">Contents</h2>
      <div v-for="content in contents" :key="content.id" class="contents-area">
        <div class="article">
          <img class="article-icon" src="~/assets/image/bird.png" />
          <div class="article-text-area">
            <p class="article-createdat">
              {{ content.publishedAt | formatDate }}
            </p>
            <h3 class="article-title">
              <nuxt-link :to="`/blog/${content.id}`" class="link" href="#">
                {{ content.title }}
              </nuxt-link>
            </h3>
          </div>
        </div>
      </div>
      <div class="contents-link">
        <a class="link" href="/blog">More Contents →</a>
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
}
</script>

<style lang="scss" scoped>
.top {
  color: #5c6464;
  margin: 50px 5% 0;

  .main-visual {
    display: flex;
    width: 100%;

    .image {
      float: left;
      object-fit: cover;
      width: 40%;
    }

    .greetings {
      margin-left: 10%;
      margin-top: 100px;

      .greetings-title {
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
    margin: 100px 10% 0;

    .contents-title {
      display: block;
      margin: 0 0 30px;
      width: 100%;
    }

    .contents-area {
      margin-bottom: 20px;

      .article-icon {
        float: left;
        height: 100px;
        margin-right: 50px;
        width: 100px;
      }

      .article-text-area {
        display: table-cell;
        height: 100px;
        vertical-align: middle;

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
