<template>
  <div class="v-main-wrapper">
    <p>{{title}}</p>
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue';
import vCart from './v-cart.vue';

export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog,
    vCart,
  },
  props: {},
  data() {
    return {
      title: 'Главная страница',
    };
  },
};
</script>

<style scoped>
  .v-main-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
</style>
