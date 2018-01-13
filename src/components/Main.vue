<template>
  <div class="container has-text-centered-desktop">
    <h1 class="title is-size-1-desktop">
      {{ slogan }}
    </h1>
    <button class="button is-primary is-large" @click="handleClick">Generate</button>
    <ShareButton :slogan="slogan" size="large"/>
  </div>
</template>

<script>
import ShareButton from './ShareButton';

export default {
  name: 'Main',
  components: {
    ShareButton,
  },
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
