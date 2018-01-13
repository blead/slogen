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
              <div class="content has-text-centered">
                <h5>{{ slogan }}</h5>
                <button class="button is-primary is-small" @click="$emit('generate-slogan')">Generate</button>
                <ShareButton :slogan="slogan" size="small"/>
              </div>
            </div>
          </div>
        </div>
        <customize-panel
        @change-config="$emit('change-config', arguments[0])"/>
      </section>
    </div>
  </transition>
</template>

<script>
import Bar from './Bar';
import ShareButton from './ShareButton';
import CustomizePanel from './CustomizePanel';

export default {
  name: 'Customize',
  components: {
    Bar,
    ShareButton,
    CustomizePanel,
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
  animation: 0.2s slide-in;
}
.slide-leave-active {
  animation: 0.2s reverse slide-in;
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
