<template>
  <div class="container has-text-centered">
    <h1 class="title is-1">
      {{ slogan }}
    </h1>
    <button class="button is-primary is-large" @click="handleClick">Generate</button>
  </div>
</template>

<script>
<<<<<<< HEAD
import SloganGenerator from '../generator';

export default {
  name: 'Main',
  created: () => {
    window.generateSlogan = (config) => {
      console.log(`generated Slogan: %c${SloganGenerator.generateSlogan(config)}`, 'font-weight: bold;');
    }
    console.log(SloganGenerator.generateSlogan());
  }
=======
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
>>>>>>> f6dcb8eb29629d1b33413223a91f6faa9ce4f0c7
};
</script>
