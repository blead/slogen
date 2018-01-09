<template>
  <div class="container has-text-centered">
    <h1 class="title is-1">
      {{ slogan }}
    </h1>
    <button class="button is-primary is-large" @click="handleClick">Generate</button>
  </div>
</template>

<script>
const generateSlogan = () =>
  Math.random().toString(36).concat(Date.now().toString(36)).substring(2);

export default {
  name: 'Main',
  data() {
    return {
      slogan: 'Generate your slogan',
    };
  },
  methods: {
    handleClick() {
      this.slogan = generateSlogan();
    },
  },
};
</script>
