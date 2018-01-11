<template>
  <transition
    name="delayed-fade"
    @before-enter="$emit('before-enter')"
    @after-enter="$emit('after-enter')"
    @before-leave="$emit('before-leave')"
  >
    <section class="hero is-fullheight is-overlay">
      <div class="hero-head">
        <Nav/>
      </div>
      <div class="hero-body">
        <transition name="fade" mode="out-in">
          <router-view :slogan="slogan" 
          @generate-slogan="$emit('generate-slogan')"
          @change-config="$emit('change-config', arguments[0])"
          />
        </transition>
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
import ConfigPanel from './ConfigPanel';

export default {
  name: 'Home',
  components: {
    Nav,
    Main,
    ConfigPanel,
  },
  props: {
    slogan: String,
  },
};
</script>

<style scoped>
.delayed-fade-enter-active {
  animation: 2s ease-out fade-in;
}
.delayed-fade-leave-active {
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
