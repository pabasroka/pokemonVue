<template>

  <div
      class="wrapper"
      v-for="pokemon in pokemons"
      :key="pokemon"
  >
    <PokemonCard class="card" :pokemon="pokemon"/>
  </div>

</template>

<script>
import PokemonCard from "@/components/PokemonCard";
import axios from "axios";

export default {
  name: "AllPokemons",
  components: {
    PokemonCard,
  },
  data() {
    return {
      pokemons: [],
    }
  },
  methods: {
    async getAllPokemons() {
      const basePath = "https://pokeapi.co/api/v2/"
      const allPokemons = "pokemon?limit=2000"
      const url = basePath + allPokemons
      try {
        const apiResponse = await axios(url)
        this.pokemons = apiResponse.data
      } catch (e) {
        console.error(e)
      }
    }
  },
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
    background: red;
    margin: 0;
  }

}

</style>
