<template>
    <header id="v-header">
    <nav >
      <div class="nav-wrapper lime  darken-4">
        <a href="#" class="brand-logo center black-text">Кафка</a>

        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons black-text">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li><a class="black-text" href="#">
            <span class="badge black-text"></span>
          </a></li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li><a class="black-text" href="#"><span></span><i class="material-icons">shopping_cart</i>
      <span class="new badge" id="cart-counter-2">4</span></a></li>
      <li><a href="#">О нас</a></li>
      <li><a href="#">Контакты</a></li>
    </ul>
  </header>
</template>

<script>
import M from 'materialize-css';

export default {

  name: 'v-header',
  data: () => ({}),
  mounted() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  },
};
</script>

<style scoped>

</style>
