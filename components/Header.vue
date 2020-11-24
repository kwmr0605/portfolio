<template>
  <div class="header">
    <div class="logo">LOGO</div>
    <ul class="menu-area">
      <li class="menu"><a class="link" href="/">Home</a></li>
      <li class="menu"><a class="link" href="/about">About</a></li>
      <!-- <li class="menu"><a class="link" href="/work">Work</a></li> -->
      <li class="menu"><a class="link" href="/blog">Blog</a></li>
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
