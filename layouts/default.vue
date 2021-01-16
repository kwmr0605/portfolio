<template>
  <div>
    <div class="main-contents">
      <Header />
      <div class="main">
        <Nuxt />
        <Background />
      </div>
      <TypeSwitcher />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  font-family: 'M PLUS 1p';
  margin: 0;

  &::selection {
    background: var(--color-primary);
  }

  .main-contents {
    min-height: 100vh;

    .main {
      position: relative;
    }
  }
}
</style>
