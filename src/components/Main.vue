<template>
  <div>
    <h1>It works!</h1>
  </div>
</template>

<script>
import { generateSlogan } from '../generator';

export default {
  name: 'Main',
  created: () => {
    console.log('generateSlogan:', generateSlogan);
  }
};
</script>

<style>
</style>
