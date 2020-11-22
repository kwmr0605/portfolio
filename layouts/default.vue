<template>
  <div>
    <div class="main-contents">
      <Header />
      <div class="main">
        <Nuxt />
        <Background />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;

  .main-contents {
    min-height: 100vh;

    .main {
      position: relative;
    }
  }
}
</style>
