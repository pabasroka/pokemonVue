<template>

  <h1 :class="[mobileView ? 'm-header' : '']"> "gotta catch em all"</h1>

  <div :class="[mobileView ? 'm-desc' : 'desc']">
    <p>
      the journey starts today! pokémon are living creatures that inhabit the pokémon world, living alongside, and usually helping, humans. (Wobbuffet, Snorunt, Jigglypuff, Luvdisc, Ditto, Guzzlord, Celesteela)
    </p>

    <p>
      type any pokémon name to start.
    </p>
  </div>

  <SearchBar @change="clear" @pokemonResponse="getPokemon"/>

  <Pokemon :apidata="apidata" v-if="apidata" class="pokemon-card"/>

</template>

<script>

import SearchBar from "@/components/SearchBar";
import Pokemon from "@/components/Pokemon";

export default {
  name: 'Home',
  components: {
    SearchBar,
    Pokemon,
  },
  data() {
    return {
      apidata: null,
      mobileView: false,
    }
  },
  methods: {
    getPokemon(apidata) {
      this.apidata = apidata
    },
    clear() {
      this.apidata = null
    },
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

<style lang="scss" scoped>
@use '../assets/variables' as v;

h1{
  padding: 50px 0;
  font-family: pokemonSolid, serif;
  letter-spacing: 2px;
  font-weight: normal;
  font-size: 70px;
}

.desc {
  margin: auto;
  width: 40vw;
  text-align: center;
}

.pokemon-card {
  margin-top: 150px;
  margin-bottom: 50px;
}

// MOBILE
.m-desc {
  margin: auto;
  width: 80vw;
  text-align: center;
}

.m-header {
  font-size: 50px;
}

</style>
