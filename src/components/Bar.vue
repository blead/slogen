<template>
  <div class="bar">
    <div class="container">
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <slot></slot>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <slot name="right"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bar',
};
</script>

<style scoped>
.bar {
  min-height: 3.25rem;
  padding: 0.5rem 1rem;
}
</style>
