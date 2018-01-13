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
    };
  },
  computed: {
    slogan() {
      if (this.sloganIndices.length) {
        return Generator.loadSlogan(this.sloganIndices);
      }
      return 'Generate your slogan';
    },
    sloganIndices() {
      try {
        const indices = JSON.parse(this.$route.query.result);
        return indices;
      } catch (e) {
        return [];
      }
    },
    config() {
      try {
        const config = JSON.parse(this.$route.query.config);
        return config;
      } catch (e) {
        return {};
      }
    },
  },
  methods: {
    setTransition(isActive = true) {
      this.isTransitionActive = isActive;
    },
    receiveConfigChange(config) {
      this.$router.replace({
        query: {
          ...this.$route.query,
          config: JSON.stringify(config),
        },
      });
    },
    generateSlogan() {
      const { indices } = Generator.generateSlogan(this.config);
      this.$router.replace({
        query: {
          ...this.$route.query,
          result: JSON.stringify(indices),
        },
      });
    },
  },
};
</script>

<style scoped>
.is-clipped {
  height: 100%;
}
</style>
