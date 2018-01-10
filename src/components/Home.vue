<template>
  <transition
    name="fade"
    @before-enter="$emit('before-enter')"
    @after-enter="$emit('after-enter')"
    @before-leave="$emit('before-leave')"
  >
    <section class="hero is-fullheight is-overlay">
      <div class="hero-head">
        <Nav/>
      </div>
      <div class="hero-body">
        <Main/>
      </div>
      <div class="hero-foot">
        <router-link :to="{ name: 'Customize' }" class="button is-light is-radiusless is-fullwidth">
          Customize
        </router-link>
      </div>
    </section>
  </transition>
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

<style scoped>
.fade-enter-active {
  animation: 2s ease-out fade-in;
}
.fade-leave-active {
  animation: 2s ease-in reverse fade-in;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
