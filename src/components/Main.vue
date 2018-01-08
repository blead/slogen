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
    console.log(SloganGenerator.generateSlogan());
  }
};
</script>

<style>
</style>
