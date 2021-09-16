<template>
  <div class="v-catalog container">
    <div class="row">
      <div class="col s12 16 offset-12">
        <ul class="tabs">
          <li class="tab col s3">
            <a href="#one" class="black-text text-darken-4">{{ tabsFields.one }}</a>
          </li>
          <li class="tab col s3">
            <a href="#two" class="black-text text-darken-4">{{ tabsFields.two }}</a>
          </li>
          <li class="tab col s3">
            <a href="#three" class="black-text text-darken-4">{{ tabsFields.three }}</a>
          </li>
          <li class="tab col s3">
            <a href="#four" class="black-text text-darken-4">{{ tabsFields.four }}</a>
          </li>
        </ul>
        <div class="col s12" id="one">
          <div class="row">
            <v-catalog-item/>
          </div>
        </div>
        <div class="col s12" id="two">
          <div class="row">
            <v-catalog-item/>
          </div>
        </div>
        <div class="col s12" id="three">
          <div class="row">
            <v-catalog-item/>
          </div>
        </div>
        <div class="col s12" id="four">
          <div class="row">
            <v-catalog-item/>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import M from 'materialize-css';
import vCatalogItem from './v-catalog-item.vue';

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {
      tabsFields: {
        one: 'Пицца',
        two: 'Суши',
        three: 'Гарнир',
        four: 'Суп',
      },
    };
  },
  mounted() {
    const el = document.querySelector('ul.tabs');
    M.Tabs.init(el);
  },
};
</script>

<style scoped>

</style>
