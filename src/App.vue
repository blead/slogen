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
      sloganIndices: [],
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
      const { text, indices } = Generator.generateSlogan(this.config);
      this.slogan = text;
      this.sloganIndices = indices;
    },
  },
};
</script>

<style scoped>
.is-clipped {
  height: 100%;
}
</style>
