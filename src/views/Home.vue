<template>

  <h1>"gotta catch em all"</h1>

  <SearchBar @pokemon="apiResponse"/>

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
    }
  },
  methods: {
    apiResponse(apidata) {
      this.apidata = apidata;
      this.$forceUpdate();
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

h1{
  padding: 50px 0;
  font-family: pokemonSolid, serif;
  letter-spacing: 2px;
  font-weight: normal;
  font-size: xxx-large;
}

.pokemon-card {
  margin-top: 150px;
  margin-bottom: 50px;
}

</style>
