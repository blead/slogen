<template>
  <div class="is-overlay" :class="{ 'is-clipped': isTransitionActive }">
    <router-view
      @before-enter="setTransition(true)"
      @after-enter="setTransition(false)"
      @before-leave="setTransition(true)"
      @generate-slogan="generateSlogan"
      :slogan="slogan"
    />
  </div>
</template>

<script>
const getSlogan = () =>
  Math.random().toString(36).concat(Date.now().toString(36)).substring(2);

export default {
  name: 'app',
  data() {
    return {
      isTransitionActive: false,
      slogan: 'Generate your slogan',
    };
  },
  methods: {
    setTransition(isActive = true) {
      this.isTransitionActive = isActive;
    },
    generateSlogan() {
      this.slogan = getSlogan();
    },
  },
};
</script>

<style scoped>
.is-clipped {
  height: 100%;
}
</style>
