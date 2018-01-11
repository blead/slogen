<template>
  <section class="section">
    <label>
      Number of tokens
    </label>
    <b-field class="min-max-tokens">
      <input type="number" min="3" max="12" :value="minTokens" 
      @change="handleChangeMin"
      @input="handleChangeMin">
      <span>-</span>
      <input type="number" min="3" max="12" :value="maxTokens" 
      @change="handleChangeMax"
      @input="handleChangeMax">
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'CustomizePanel',
  data() {
    return {
      minTokens: 3,
      maxTokens: 6,
    };
  },
  methods: {
    handleChangeMin(e) {
      const value = parseInt(e.target.value, 10);
      if(value > this.maxTokens) {
        e.preventDefault();
        e.target.value = this.maxTokens;
      }
      if(value >= 12) {
        e.preventDefault();
        e.target.value = 12;
      }
      this.minTokens = e.target.value;
      this.$emit('change-config', {minTokens: parseInt(e.target.value)});
    },
    handleChangeMax(e) {
      const value = parseInt(e.target.value, 10);
      if(value < this.minTokens) {
        e.preventDefault();
        e.target.value = this.minTokens;
      }
      if(value >= 12) {
        e.preventDefault();
        e.target.value = 12;
      }
      this.maxTokens = e.target.value;
      this.$emit('change-config', {maxTokens: parseInt(e.target.value)});
    }
  }
}
</script>

<style scoped>
  .min-max-tokens > * {
    font-size: 1.2em;
  }
  input {
    outline: none;
    text-shadow: 0 0 0 black;
    border: none;
    background-color: aliceblue;
    color: transparent;
    padding: 0.2em 0.2em 0.2em 0.5em;
    border-radius: 0.5em;
    margin-right: 0.5em;
    margin-left: 0.5em;
    width: 2.5em;
  }
</style>
