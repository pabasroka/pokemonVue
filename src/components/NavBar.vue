<template>
  <nav class="sticky">
    <div id="nav">
      <router-link to="/">POKEMON</router-link>|
      <router-link to="/all">ALL POKEMONS</router-link>|
      <router-link to="/info">INFO</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>

export default {
  name: "NavBar",
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
}

#nav {
  overflow: hidden;
  background: v.$primary;
  padding: 30px;
  box-shadow: 0 5px 4px 0 rgba(0,0,0,.2);
  z-index: 1000;

  a {
    padding: 50px;
    color: black;
    font-size: 32px;
    font-weight: bold;
    font-family: pokemonSolid, serif;
    letter-spacing: 3px;
    text-decoration: none;
    text-shadow: -2px -2px 0 v.$secondary, 2px -2px 0 v.$secondary, -2px 2px 0 v.$secondary, 2px 2px 0 v.$secondary;
  }

  a.router-link-exact-active{
    color: v.$secondary;
    text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000, 5px 5px 0 #000;
  }
}
</style>
