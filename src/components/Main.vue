<template>
  <div class="container has-text-centered-desktop">
    <h1 class="title is-size-1-desktop">
      {{ slogan }}
    </h1>
    <button class="button is-primary is-large" @click="handleClick">Generate</button>
  </div>
</template>

<script>
<<<<<<< HEAD
import Generator from '../generator';

=======
>>>>>>> 9a4f3314712ee05da1ef103fa78fe60ba18e5b96
export default {
  name: 'Main',
  props: {
    slogan: String,
  },
  methods: {
    handleClick() {
<<<<<<< HEAD
      this.slogan = Generator.generateSlogan();
=======
      this.$emit('generate-slogan');
>>>>>>> 9a4f3314712ee05da1ef103fa78fe60ba18e5b96
    },
  },
};
</script>
