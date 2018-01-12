<template>
  <div class="is-overlay" :class="{ 'is-clipped': isTransitionActive }">
    <router-view
      @before-enter="setTransition(true)"
      @after-enter="setTransition(false)"
      @before-leave="setTransition(true)"
      @generate-slogan="generateSlogan"
      @change-config="receiveConfigChange"
      :slogan="slogan"
    />
  </div>
</template>

<script>
import Generator from './generator';

export default {
  name: 'app',
  data() {
    return {
      isTransitionActive: false,
      slogan: 'Generate your slogan',
      config: {},
    };
  },
  methods: {
    setTransition(isActive = true) {
      this.isTransitionActive = isActive;
    },
    receiveConfigChange(config) {
      this.config = Object.assign(this.config, config, this.config);
      console.log(this.config);
    },
    generateSlogan() {
      this.slogan = Generator.generateSlogan(this.config);
    },
  },
};
</script>

<style scoped>
.is-clipped {
  height: 100%;
}
</style>
