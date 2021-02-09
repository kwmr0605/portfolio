<template>
  <div class="type-switch-area">
    <div class="type-switch">
      <div class="toggle" @click="toggleChoices">
        <font-awesome-icon
          v-if="typeCurrent == 'leaf'"
          :icon="['fas', 'leaf']"
        />
        <font-awesome-icon
          v-else-if="typeCurrent == 'fire'"
          :icon="['fas', 'fire']"
        />
        <font-awesome-icon
          v-else-if="typeCurrent == 'water'"
          :icon="['fas', 'tint']"
        />
        <font-awesome-icon
          v-else-if="typeCurrent == 'bolt'"
          :icon="['fas', 'bolt']"
        />
      </div>

      <transition-group
        tag="ul"
        class="choices"
        name="choice"
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @enter-cancelled="afterEnter"
      >
        <li
          v-for="(type, index) in typeList"
          v-show="isChoicesOpen"
          :key="type"
          :data-index="index"
          @click="() => choiceClickHandler(type)"
        >
          <font-awesome-icon
            v-if="type == 'leaf'"
            class="choices-icon"
            :icon="['fas', 'leaf']"
          />
          <font-awesome-icon
            v-else-if="type == 'fire'"
            class="choices-icon"
            :icon="['fas', 'fire']"
          />
          <font-awesome-icon
            v-else-if="type == 'water'"
            class="choices-icon"
            :icon="['fas', 'tint']"
          />
          <font-awesome-icon
            v-else-if="type == 'bolt'"
            class="choices-icon"
            :icon="['fas', 'bolt']"
          />
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChoicesOpen: false,
    }
  },
  computed: {
    typeList() {
      return this.$store.getters.types
    },
    typeCurrent() {
      return this.$store.state.type
    },
  },
  methods: {
    toggleChoices() {
      this.isChoicesOpen = !this.isChoicesOpen
    },
    choiceClickHandler(type) {
      this.updateType(type)
      this.toggleChoices()
    },
    updateType(type) {
      this.$store.commit('updateType', type)
    },
    // enter の初めにインデックス×75でディレイを付ける
    beforeEnter(el) {
      el.style.transitionDelay = `${75 * el.dataset.index}ms`
    },
    // enter が終わるか中止されたらディレイを消す
    afterEnter(el) {
      el.style.transitionDelay = ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/mixin';
@import '~/assets/sass/variables';

.type-switch-area {
  bottom: 5px;
  position: fixed;
  width: 100%;
  z-index: 3;

  @include mq(md) {
    bottom: 30px;
  }

  .type-switch {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    margin-right: 5%;

    .toggle {
      align-items: center;
      background-color: var(--color-secondary);
      border-radius: 50%;
      color: var(--color-primary);
      cursor: pointer;
      display: flex;
      height: 52px;
      justify-content: center;
      margin-left: 10px;
      transition: color var(--base-transition);
      width: 52px;
    }

    .choices {
      display: flex;
      list-style: none;

      li {
        align-items: center;
        background-color: var(--color-secondary);
        border-radius: 20px;
        color: var(--color-primary);
        cursor: pointer;
        display: flex;
        height: 36px;
        justify-content: center;
        margin-right: 16px;
        width: 36px;
      }

      /* For transition group */
      .choice-enter-active,
      .choice-leave-active {
        transition: transform 250ms, opacity 250ms;
      }
      .choice-enter,
      .choice-leave-to {
        opacity: 0;
        transform: translateX(5px);
      }
    }
  }
}
</style>
