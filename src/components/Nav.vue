<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item has-text-weight-bold is-unselectable">
          <span class="has-text-dark is-size-4">SloGen</span><sup class="is-size-7 is-uppercase">alpha</sup>
        </div>
        <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-end">
          <a class="navbar-item" href="https://github.com/blead/slogen">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>
