<template>
  <nav>
    <div id="nav">
      <router-link to="/">POKEMON</router-link>|
      <router-link to="/all">ALL</router-link>|
      <router-link to="/info">INFO</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
import debounce from 'lodash/debounce';

export default {
  name: "NavBar",
  methods: {
    stickyNavbar() {
      const navbar = document.querySelector('#nav')
      const sticky = navbar.offsetTop

      if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.stickyNavbar, 100);
    window.addEventListener('scroll', this.handleDebouncedScroll)
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.sticky, #nav {
  padding-top: 260px;
}

#nav {
  overflow: hidden;
  background: v.$white;
  padding: 30px;
  box-shadow: 0 5px 4px 0 rgba(0,0,0,.2);

  a {
    padding: 50px;
    color: black;
    font-size: 32px;
    font-weight: bold;
    font-family: pokemonSolid, serif;
    letter-spacing: 3px;
    text-decoration: none;
    text-shadow: -2px -2px 0 v.$yellow, 2px -2px 0 v.$yellow, -2px 2px 0 v.$yellow, 2px 2px 0 v.$yellow;
  }

  a.router-link-exact-active{
    color: v.$yellow;
    text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000, 5px 5px 0 #000;
  }
}
</style>
