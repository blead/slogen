<template>
  <b-dropdown class="control">
    <button class="button" :class="sizeClass" slot="trigger">
      <span class="icon">
        <FontAwesomeIcon :icon="shareAlt"/>
      </span>
    </button>
    <b-dropdown-item custom>
      Share on:
    </b-dropdown-item>
    <hr class="dropdown-divider">
    <b-dropdown-item has-link>
      <a :href="facebookShareURL">
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
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faShareAlt from '@fortawesome/fontawesome-free-solid/faShareAlt';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';

export default {
  name: 'ShareButton',
  components: {
    FontAwesomeIcon,
  },
  props: {
    slogan: String,
    size: String,
  },
  computed: {
    sizeClass() {
      if (this.size === 'large') {
        return 'is-large';
      }
      if (this.size === 'small') {
        return 'is-small';
      }
      return '';
    },
    currentURL() {
      return encodeURIComponent(
        `${window.location.protocol}//${window.location.hostname}${window.location.pathname}#${this.$route.fullPath}`,
      );
    },
    facebookShareURL() {
      return `https://www.facebook.com/dialog/share?app_id=1705726949489765&display=page&href=${this.currentURL}` +
        `&redirect_uri=${this.currentURL}` +
        `&quote=${this.slogan}`;
    },
    twitterShareURL() {
      return `https://twitter.com/intent/tweet?text=${this.slogan}` +
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
};
</script>
