<template>
  <div>
    <h1>It works!</h1>
  </div>
</template>

<script>
import SloganGenerator from '../generator';

export default {
  name: 'Main',
  created: () => {
    window.generateSlogan = (config) => {
      console.log(`generated Slogan: %c${SloganGenerator.generateSlogan(config)}`, 'font-weight: bold;');
    }
    console.log(SloganGenerator.generateSlogan());
  }
};
</script>

<style>
</style>
