<template>
  <div class="header">
    <div class="logo">LOGO</div>
    <ul class="menu-area">
      <li class="menu"><a class="menu-link" href="/">Home</a></li>
      <li class="menu"><a class="menu-link" href="/">About</a></li>
      <li class="menu"><a class="menu-link" href="/">Work</a></li>
      <li class="menu"><a class="menu-link" href="/">Contents</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header {
  color: #5c6464;
  margin-top: 50px;
  text-align: center;

  .logo {
    color: #5c6464;
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

      .menu-link {
        color: #5c6464;
        text-decoration: none;
      }
    }
  }
}
</style>
