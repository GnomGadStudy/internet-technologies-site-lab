<template>
  <div id="app">
    <v-header />
    <v-main-wrapper>
    </v-main-wrapper>
  </div>
</template>

<script>
import vHeader from './components/v-header.vue';
import vMainWrapper from './components/v-main-wrapper.vue';

export default {
  name: 'App',
  components: {
    vHeader,
    vMainWrapper,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
