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
          <a href="/">More Profile →</a>
        </div>
      </div>
    </div>
    <div class="contents">
      <h2 class="contents-title">Contents</h2>
      <div class="contents-area">
        <div class="article">
          <img class="article-icon" src="~/assets/image/bird.png" />
          <div class="article-text-area">
            <h3 class="article-title">記事のタイトル</h3>
            <p class="article-createdat">2020/10/10</p>
          </div>
        </div>
      </div>
      <div class="contents-area">
        <div class="article">
          <img class="article-icon" src="~/assets/image/bird.png" />
          <div class="article-text-area">
            <h3 class="article-title">記事のタイトル</h3>
            <p class="article-createdat">2020/10/10</p>
          </div>
        </div>
      </div>
      <div class="contents-area">
        <div class="article">
          <img class="article-icon" src="~/assets/image/bird.png" />
          <div class="article-text-area">
            <h3 class="article-title">記事のタイトル</h3>
            <p class="article-createdat">2020/10/10</p>
          </div>
        </div>
      </div>
      <div class="contents-area">
        <div class="article">
          <img class="article-icon" src="~/assets/image/bird.png" />
          <div class="article-text-area">
            <h3 class="article-title">記事のタイトル</h3>
            <p class="article-createdat">2020/10/10</p>
          </div>
        </div>
      </div>
      <div class="contents-area">
        <div class="article">
          <img class="article-icon" src="~/assets/image/bird.png" />
          <div class="article-text-area">
            <h3 class="article-title">記事のタイトル</h3>
            <p class="article-createdat">2020/10/10</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  color: #5c6464;
  margin: 50px 100px 0;

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

        a {
          color: #5c6464;
          text-decoration: none;
        }
      }
    }
  }

  .contents {
    display: table;
    height: auto;
    margin: 100px 200px 0;

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

        .article-title {
          margin: 0 0 10px 0;
        }

        .article-createdat {
          margin: 0;
        }
      }
    }
  }
}
</style>
