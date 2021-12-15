<template>

    <NavBarMobile v-if="mobileView"/>
    <NavBar v-else/>

</template>

<script>
import NavBar from "@/components/NavBar";
import NavBarMobile from "@/components/NavBarMobile";

export default {
  name: 'App',
  components: {
    NavBar,
    NavBarMobile,
  },
  data() {
    return {
      mobileView: true,
      showNav: false,
    }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
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
  font-family: pokemonSolid, serif;
}
*:focus, *:active  {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: linear-gradient(to bottom, v.$secondary, darken(v.$secondary, 20%)) fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.top-bar {
  display: flex;
  justify-content: end;
  width: 100%;
}

.hamburger {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}

</style>
