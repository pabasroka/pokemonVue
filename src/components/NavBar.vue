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
export default {
  name: "NavBar"
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

#nav {
  background: v.$white;
  padding: 30px;
  box-shadow: 0 5px 4px 0 rgba(0,0,0,.2);

  a{
    padding: 30px;
    color: black;
    font-size: 22px;
    font-weight: bold;
    font-family: pokemonSolid;
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
