<template>
  <div id="app">
    <navbar />
      <body-hero />
  </div>
</template>

<script>
import MessagesButtons from '@/components/MessagesButtons'
import NavBarVue from '@/components/NavBar.vue';
import BodyVue from '@/components/Body.vue';

export default {
  name: 'app',
  components: {
    'navbar': NavBarVue,
    'body-hero': BodyVue
  },
}
</script>

<style lang='scss'>
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #432AD3;
$primary-invert: findColorInvert($primary);
$secondary: #F4D70D;
$secondary-invert: findColorInvert($secondary);
$tetriary: #044389;
$tetriary-invert: findColorInvert($tetriary);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
