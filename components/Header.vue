<template>
  <div class="header">
    <div class="logo">LOGO</div>
    <ul class="menu-area">
      <li class="menu"><nuxt-link class="link" to="/">Home</nuxt-link></li>
      <li class="menu">
        <nuxt-link class="link" to="/about">About</nuxt-link>
      </li>
      <!-- <li class="menu"><nuxt-link class="link" href="/work">Work</nuxt-link></li> -->
      <li class="menu"><nuxt-link class="link" to="/blog">Blog</nuxt-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header {
  color: var(--color-secondary);
  margin: 50px 0;
  text-align: center;
  transition: all var(--base-transition);

  .logo {
    font-size: 50px;
  }

  .menu-area {
    list-style: none;
    margin: 50px auto 0;
    padding: 0;
    overflow: hidden;

    .menu {
      display: inline;
      padding: 0 25px;
    }
  }
}
</style>
