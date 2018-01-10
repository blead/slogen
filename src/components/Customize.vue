<template>
  <transition
    name="slide"
    @before-enter="$emit('before-enter')"
    @after-enter="$emit('after-enter')"
    @before-leave="$emit('before-leave')"
  >
    <section class="section is-overlay is-light">
      <div class="container">
        <router-link :to="{ name: 'Home' }" class="delete is-large is-pulled-right"/>
        <h1 class="title">Customize</h1>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'Customize',
};
</script>

<style scoped>
.is-overlay {
  position: absolute;
  z-index: 1;
}
.section.is-light {
  background-color: whitesmoke;
  color: #363636;
}
.slide-enter-active {
  animation: 1s slide-in;
  overflow: hidden;
}
.slide-leave-active {
  animation: 1s reverse slide-in;
}
@keyframes slide-in {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
