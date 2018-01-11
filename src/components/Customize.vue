<template>
  <transition
    name="slide"
    @before-enter="$emit('before-enter')"
    @after-enter="$emit('after-enter')"
    @before-leave="$emit('before-leave')"
  >
    <div class="is-overlay">
      <Bar class="is-light">
        <h1 class="title">Customize</h1>
        <button class="delete is-large" slot="right" @click="$router.go(-1)">Back</button>
      </Bar>
      <section class="section">
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
import Bar from './Bar';

export default {
  name: 'Customize',
  components: {
    Bar,
  },
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
.is-light {
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
