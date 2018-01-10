<template>
  <transition
    name="slide"
    @before-enter="$emit('before-enter')"
    @after-enter="$emit('after-enter')"
    @before-leave="$emit('before-leave')"
  >
    <div class="is-overlay">
      <div class="bar is-light">
        <div class="container">
          <div class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <h1 class="title">Customize</h1>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <router-link :to="{ name: 'Home' }" class="delete is-large"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="section is-light">
        <div class="container">
          <div class="card">
            <div class="card-content">
              <div class="content">
                {{ slogan }}
              </div>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item" @click="$emit('generate-slogan')">Generate</a>
            </footer>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Customize',
  props: {
    slogan: String,
  },
};
</script>

<style scoped>
.is-overlay {
  position: absolute;
  z-index: 1;
  background-color: white;
}
.bar {
  min-height: 3.25rem;
  padding: 0.5rem 1rem;
}
.bar.is-light {
  background-color: whitesmoke;
  color: #363636;
}
.slide-enter-active {
  animation: 1s slide-in;
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
