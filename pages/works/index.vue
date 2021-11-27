<template>
  <div class="works">
    <h1 class="works-title">Works</h1>
    <div v-for="works in workList" :key="works" class="works-area">
      <div class="works-image-area" @click="pushLink(works.urlPath)">
        <img class="works-image" :src="works.imagePath" />
      </div>
      <p class="works-image-title">{{ works.name }}</p>
    </div>
  </div>
</template>

<script>
import workList from '~/assets/data/workList.js'

export default {
  computed: {
    workList: () => workList,
  },

  methods: {
    pushLink(link) {
      this.$router.push(link)
    },
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

.works {
  color: var(--color-secondary);
  margin: 0 15%;
  transition: all var(--base-transition);
  text-align: center;

  @include mq(md) {
    margin: 0 5%;
  }

  .works-title {
    font-size: 40px;
    margin: 0 0 30px;
  }

  .works-area {
    margin: 0 auto;
    width: 50%;

    @include mq(md) {
      width: 100%;
    }

    .works-image-area {
      background: var(--color-secondary);
      display: flex;
      margin-bottom: 10px;
      overflow: hidden;
      width: 100%;

      .works-image {
        cursor: pointer;
        object-fit: cover;
        transition: 0.3s all ease;
        width: 100%;

        &:hover {
          opacity: 0.7;
          transform: scale(1.2, 1.2);
          transition: 0.3s all ease;
        }
      }
    }

    .works-image-title {
      margin-bottom: 50px;
    }
  }
}
</style>
