<template>
  <div class="pb-rating-graph">
    <ul>
      <li>
        <div class="pb-rating-graph__wrap">
          <div class="pb-rating-graph__basis">
            <span class="pb-rating-graph__basis-inner">0</span>
          </div>
          <div class="pb-rating-graph__axis">
            <div class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 0"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 0">0</p>
            </div>
            <div class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 1"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 1">1</p>
            </div>
            <div class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 2"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 2">2</p>
            </div>
            <div data-check="true" class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 3"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 3">3</p>
            </div>
            <div class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 4"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 4">4</p>
            </div>
            <div class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 5"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 5">5</p>
            </div>
            <div class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 6"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 6">6</p>
            </div>
            <div class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 7"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 7">7</p>
            </div>
            <div data-check="true" class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 8"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 8">8</p>
            </div>
            <div class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 9"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 9">9</p>
            </div>
            <div class="pb-rating-graph__scale">
              <font-awesome-icon
                v-show="level == 10"
                :icon="['fas', 'apple-alt']"
                class="apple-icon"
              />
              <p v-show="level == 10">10</p>
            </div>
          </div>
          <div class="pb-rating-graph__basis">
            <span class="pb-rating-graph__basis-inner">10</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['level'],
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/mixin';
@import '~/assets/sass/variables';

.pb-rating-graph {
  max-width: 700px;
  margin: 0 auto 2em;

  @include mq(md) {
    margin: 0;
    padding: 2em 1em;
  }

  ul {
    margin: 0;
    padding: 0;
    border: none;

    li {
      list-style: none;
      margin: 0;
      padding: 0;

      &:before {
        content: unset;
      }

      &:last-child .pb-rating-graph__wrap {
        margin: 20px 0 0;
        padding-top: 5px;
      }

      .pb-rating-graph__wrap {
        display: flex;
        margin: 20px 0;

        @include mq() {
          width: 60&;
        }

        .pb-rating-graph__axis {
          width: 70%;
          margin-top: 10px;
          position: relative;
          display: flex;
          justify-content: space-between;

          &:before {
            content: '';
            display: inline-block;
            height: 5px;
            background: var(--color-secondary);
            width: 100%;
            position: absolute;
          }

          &:after {
            content: unset;
          }
        }

        .pb-rating-graph__scale {
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
          width: 20px;
          margin-top: 0;

          @include mq(md) {
            width: 16px;
          }

          &:after {
            content: unset;
          }

          p {
            color: var(--color-primary);
            font-size: 14px;
            position: absolute;
            top: -6px;

            @include mq(md) {
              top: -8px;
            }
          }

          .apple-icon {
            display: block;
            height: 30px;
            border-radius: 50%;
            margin-top: -15px;
            margin-bottom: 10px;
            font-size: 30px;
            color: var(--color-secondary);
          }
        }

        .pb-rating-graph__basis {
          width: 15%;
          color: #71828a;
          font-weight: 600;
          font-size: 16px;
          line-height: 1.5;

          @include mq(md) {
            width: 20%;
            font-size: 13px;
            letter-spacing: 0px;
            line-height: 1.8;
          }

          &:first-of-type {
            text-align: right;
            padding-right: 15px;

            @include mq(md) {
              padding-right: 7px;
            }
          }

          &:last-of-type {
            text-align: left;
            padding-left: 15px;

            @include mq(md) {
              padding-left: 7px;
            }
          }

          .pb-rating-graph__basis-inner {
            color: var(--color-secondary);
            display: inline-block;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
