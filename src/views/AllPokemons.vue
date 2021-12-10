<template>

  <div class="wrapper">
    <div
        class="card-list"
        v-for="pokemon in pokemons"
        :key="pokemon.name"
    >
      <AsyncPokemon class="card" :pokemon="pokemon"/>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import {defineAsyncComponent} from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader";

const AsyncPokemon = defineAsyncComponent({
  loader: () => import("@/components/PokemonCard" /* webpackChunkName: "pokemon" */),
  loadingComponent: PulseLoader,
  delay: 200,
  suspensible: false,
})

export default {
  name: "AllPokemons",
  components: {
    AsyncPokemon,
  },
  data() {
    return {
      pokemons: [],
    }
  },
  methods: {

  },
  async created() {
    const basePath = "https://pokeapi.co/api/v2/"
    const allPokemons = "pokemon?limit=2000"
    const url = basePath + allPokemons
    try {
      const apiResponse = await axios(url)
      this.pokemons = apiResponse.data.results
      // console.log(this.pokemons)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em 1em;
  grid-auto-rows: minmax(100px, auto);
  margin: 30px;

  .card {
    grid-template-columns: 1fr;
    margin: 0;
  }

}

</style>
