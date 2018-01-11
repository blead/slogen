<template>
  <section class="section">
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">
          Number of tokens
        </div>
      </header>
      <div class="card-content">
        <b-field class="min-max-tokens">
          <input type="number" min="3" max="12" :value="minTokens" 
          @change="handleChangeMin"
          @input="handleChangeMin">
          <span>-</span>
          <input type="number" min="3" max="12" :value="maxTokens" 
          @change="handleChangeMax"
          @input="handleChangeMax">
        </b-field>
      </div>
    </div>
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">
          Exclude Tokens
        </div>
      </header>
      <div class="card-content">
        <b-field>
          <b-taginput 
            @input="changeExclude"
            @typing="getFilteredTags"
            autocomplete :data="filteredTags"
          ></b-taginput>
        </b-field>
      </div>
    </div>
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">
          Include Tokens
        </div>
      </header>
      <div class="card-content">
        <b-field>
          <b-taginput 
            @input="changeInclude"
            @typing="getFilteredTags"
            autocomplete :data="filteredTags"
          ></b-taginput>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
import tokens from '../generator/tokens';

export default {
  name: 'CustomizePanel',
  data() {
    return {
      minTokens: 3,
      maxTokens: 6,
      include: [],
      exclude: [],
      filteredTags: tokens,
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
    },
    changeInclude(include) {
      this.include = include;
      this.$emit('change-config', {include});
    },
    changeExclude(exclude) {
      this.exclude = exclude;
      this.$emit('change-config', {exclude});
    },
    getFilteredTags(text) {
      this.filteredTags = tokens.filter(
        (option) => {
          return this.include.indexOf(option) == -1 && this.exclude.indexOf(option) == -1 && option.indexOf(text) >= 0
        }
      )
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
