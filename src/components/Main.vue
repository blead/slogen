<template>
  <div class="container has-text-centered-desktop">
    <h1 class="title is-size-1-desktop">
      {{ slogan }}
    </h1>
    <button class="button is-primary is-large" @click="handleClick">Generate</button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    slogan: String,
  },
  methods: {
    handleClick() {
      this.$emit('generate-slogan');
    },
  },
};
</script>
