<template>

  <NavBar/>

</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
@use 'assets/variables' as v;
@font-face {
  font-family: pokemonHollow;
  src: url('assets/fonts/pokemon_hollow.ttf');
}

@font-face {
  font-family: pokemonSolid;
  src: url('assets/fonts/pokemon_solid.ttf');
}

* {
  font-family: pokemonHollow, serif;
}

body {
  margin: 0;
  padding: 0;
  background: v.$yellow;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
