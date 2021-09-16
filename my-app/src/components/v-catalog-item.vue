<template>
  <div class="v-catalog-item">
    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="">
          <span class="card-title"></span>
          <a class="btn-floating halfway-fab waves-effect waves-light lime darken-2">
            <i class="material-icons">add</i>
          </a>
        </div>
        <div class="card-content">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
  },
  data() {
    return {
      text: 'Еда',
    };
  },
};
</script>

<style scoped>

</style>
