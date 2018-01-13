<template>
  <div class="container has-text-centered-desktop">
    <h1 class="title is-size-1-desktop">
      {{ slogan }}
    </h1>
    <button class="button is-primary is-large" @click="handleClick">Generate</button>
    <b-dropdown class="control">
      <button class="button is-large" slot="trigger">
        <span class="icon">
          <FontAwesomeIcon :icon="shareAlt"/>
        </span>
      </button>
      <b-dropdown-item custom>
        Share on:
      </b-dropdown-item>
      <hr class="dropdown-divider">
      <b-dropdown-item has-link>
        <a :href="facebookShareURL" target="_blank">
          <FontAwesomeIcon :icon="facebook" size="lg" fixed-width/>
          Facebook
        </a>
      </b-dropdown-item>
      <b-dropdown-item has-link>
        <a :href="twitterShareURL" target="_blank">
          <FontAwesomeIcon :icon="twitter" size="lg" fixed-width/>
          Twitter
        </a>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faShareAlt from '@fortawesome/fontawesome-free-solid/faShareAlt';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';

export default {
  name: 'Main',
  components: {
    FontAwesomeIcon,
  },
  props: {
    slogan: String,
  },
  computed: {
    currentURL() {
      return encodeURIComponent(window.location);
    },
    facebookShareURL() {
      return `https://www.facebook.com/dialog/share?app_id=1705726949489765&display=page&href=${this.currentURL}` +
        `&redirect_uri=${this.currentURL}` +
        `&quote=${this.$props.slogan}`;
    },
    twitterShareURL() {
      return `https://twitter.com/intent/tweet?text=${this.$props.slogan}` +
        `&url=${this.currentURL}`;
    },
    shareAlt() {
      return faShareAlt;
    },
    facebook() {
      return faFacebook;
    },
    twitter() {
      return faTwitter;
    },
  },
  methods: {
    handleClick() {
      this.$emit('generate-slogan');
    },
  },
};
</script>
