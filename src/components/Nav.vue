<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link :to="{ name: 'Main', query: $route.query }" class="navbar-item has-text-weight-bold is-unselectable">
          <span class="has-text-dark is-size-4">SloGen</span><sup class="is-size-6 wandek"><em>wandek</em></sup>
        </router-link>

        <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-end">
          <router-link :to="{ name: 'FunFacts', query: $route.query }" class="navbar-item">
            Fun Facts
          </router-link>
          <a class="navbar-item" href="https://github.com/blead/slogen" target="_blank">
            <span class="icon is-large is-hidden-touch">
              <FontAwesomeIcon :icon="github" size="lg"/>
            </span>
            <span class="is-hidden-desktop">
              <FontAwesomeIcon :icon="github"/>
              GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

export default {
  name: 'Nav',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      isMenuActive: false,
    };
  },
  computed: {
    github() {
      return faGithub;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style scoped>
  .wandek {
    font-family: 'Pacifico', cursive;
    font-weight: lighter;
  }
</style>
