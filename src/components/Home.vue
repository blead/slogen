<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <Nav/>
    </div>
    <div class="hero-body">
      <Main/>
    </div>
    <div class="hero-foot">
      <button class="button is-light is-radiusless is-fullwidth">
        Configure
      </button>
    </div>
  </section>
</template>

<script>
import Nav from './Nav';
import Main from './Main';

export default {
  name: 'Home',
  components: {
    Nav,
    Main,
  },
};
</script>
