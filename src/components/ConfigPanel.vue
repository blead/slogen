<template>
  <div>
  <section class="section">
    <label class="label">
      Number of Tokens
      <input 
        class="slider min-slider" type="range" min="1" max="12"
        @input="changeMinTokens" :value="minTokens">
      <input 
        class="slider max-slider" type="range" min="1" max="12"
        @input="changeMaxTokens" :value="maxTokens">
      <label>{{ minTokens }} - {{ maxTokens }}</label>
    </label>
    <label class="label">
      <b-field label="Exclude Tokens">
        <b-taginput
        autocomplete
        :data="filteredResults"
        @typing="getFilteredResults"
        >
        </b-taginput>
      </b-field>
      <b-field label="Include Tokens">
        <b-taginput
        autocomplete
        :data="filteredResults"
        @typing="getFilteredResults">
        </b-taginput>
      </b-field>
    </label>
  </section>
  </div>
</template>

<script>
import tokens from '../generator/tokens';

export default {
  name: 'ConfigPanel',
  data: () => ({
    maxTokens: 5,
    minTokens: 1,
    filteredResults: tokens,
  }),
  methods: {
    getFilteredResults(text) {
      this.filteredResults = tokens.filter((item) => {
        return item.indexOf(text) >= 0;
      })
    },
    changeMaxTokens(event) {
      let value = parseInt(event.target.value);
      if(value < this.minTokens) {
        event.preventDefault();
        value = this.minTokens;
        event.target.value = this.minTokens.toString();
      }
      this.maxTokens = value;
    },
    changeMinTokens(event) {
      let value = parseInt(event.target.value);
      if(value > this.maxTokens) {
        event.preventDefault();
        value = this.maxTokens;
        event.target.value = this.maxTokens.toString();
      }
      this.minTokens = value;
    }
  },
};
</script>
