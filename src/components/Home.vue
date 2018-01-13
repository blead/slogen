<template>
  <transition
    name="delayed-fade"
    @before-enter="$emit('before-enter')"
    @after-enter="$emit('after-enter')"
    @before-leave="$emit('before-leave')"
  >
    <Hero>
      <Nav slot="head"/>
      <transition name="fade" mode="out-in">
        <router-view :slogan="slogan"
          @generate-slogan="$emit('generate-slogan')"
          @change-config="$emit('change-config', arguments[0])"
        />
      </transition>
      <transition name="fade" mode="out-in" slot="foot">
        <router-link :to="{ name: 'Customize', query: $route.query }"
          class="button is-light is-radiusless is-fullwidth"
          v-if="$route.name === 'Main'"
        >
          Customize
        </router-link>
      </transition>
    </Hero>
  </transition>
</template>

<script>
import Hero from './Hero';
import Nav from './Nav';

export default {
  name: 'Home',
  components: {
    Hero,
    Nav,
  },
  props: {
    slogan: String,
  },
};
</script>

<style scoped>
.delayed-fade-enter-active {
  animation: 0.4s ease-out fade-in;
}
.delayed-fade-leave-active {
  animation: 0.4s ease-in reverse fade-in;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
