<template>
  <div class="is-overlay" :class="{ 'is-clipped': isTransitionActive }">
    <router-view
      @before-enter="setTransition(true)"
      @after-enter="setTransition(false)"
      @before-leave="setTransition(true)"
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isTransitionActive: false,
    };
  },
  methods: {
    setTransition(isActive = true) {
      this.isTransitionActive = isActive;
    },
  },
};
</script>

<style scoped>
.is-clipped {
  height: 100%;
}
</style>
