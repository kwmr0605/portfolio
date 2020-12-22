<template>
  <div class="about">
    <div class="about-main-visual">
      <img class="about-image" src="~/assets/image/about.png" alt="about" />
      <div class="about-text-area">
        <h1 class="about-title">About</h1>
        <p>初めまして。</p>
        <p>
          1996年に青森県で生まれました。<br />
          旅館で仲居として働いたり、アイドルやったりしていたのですが、気付いたらフロントエンドエンジニアになっていました。
        </p>
        <p>
          業務ではフロントエンドを中心に担当してますが、時にはバックエンドを改修したりインフラまわりをいじったりといろいろやっています。
        </p>
      </div>
    </div>
    <div class="skill">
      <img class="skill-image" src="~/assets/image/skill.png" alt="skill" />
      <h2 class="skill-title">Skill Set</h2>
      <div v-for="skills in skillList" :key="skills.category">
        <h3>{{ skills.category }}</h3>
        <div
          v-for="(skill, index) in skills.data"
          :key="`ch-${index}`"
          class="skill-area"
        >
          <p class="skill-name">{{ skill.name }}</p>
          <Slider :level="skill.value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Slider from '~/components/Slider'
import skillList from '~/assets/data/skillList.js'

export default {
  computed: {
    skillList: () => skillList,
  },

  head() {
    return {
      title: 'About',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/mixin';
@import '~/assets/sass/variables';

.about {
  color: var(--color-secondary);
  margin: 0 15%;
  transition: all var(--base-transition);

  @include mq(md) {
    margin: 0 5%;
  }

  .about-main-visual {
    display: flex;
    margin-bottom: 200px;
    width: 100%;

    @include mq(md) {
      display: block;
    }

    .about-image {
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

    .about-text-area {
      margin: 100px 0 0 10%;
      width: 50%;

      @include mq(md) {
        margin: 0;
        width: 100%;
      }

      .about-title {
        font-size: 40px;
        margin: 0 0 30px;
      }

      p {
        margin-bottom: 30px;
      }
    }
  }

  .skill {
    position: relative;
    width: 100%;

    .skill-title {
      font-size: 40px;
      margin: 0 0 30px;
    }

    .skill-image {
      height: 240px;
      mix-blend-mode: multiply;
      object-fit: cover;
      position: absolute;
      right: 0;
      top: -75px;
      width: 240px;

      @include mq(sm) {
        height: 100%;
        position: static;
        width: 100%;
      }
    }

    h3 {
      font-size: 25px;
      margin-bottom: 30px;

      @include mq(md) {
        font-size: 20px;
      }
    }

    .skill-area {
      margin-bottom: 50px;

      @include mq(md) {
        margin: 0;
      }

      .skill-name {
        float: left;
        font-size: 20px;
        width: 120px;

        @include mq(md) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
