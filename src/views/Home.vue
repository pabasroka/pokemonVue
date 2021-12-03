<template>

  <h1>"gotta catch em all"</h1>

  <SearchBar @pokemon="apiResponse"/>

  <Pokemon :apidata="apidata" :color="colorType" v-if="apidata" class="pokemon-card"/>

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
      colorType: '#c0c0c0',
    }
  },
  methods: {
    apiResponse(apidata) {
      this.apidata = apidata;
      switch (this.apidata.types[0].name) {
        case 'normal':
          this.colorType = '#c0c0c0'
          break;
        case 'water':
          this.colorType = '#0909f5'
          break;
        default:
          this.colorType = '#c0c0c0'
          break;
      }
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
