<template>

  <div class="card">

    <div class="card-name">
      {{ pokemon.name }}
    </div>

    <div class="card-image">
      {{ pokemon.url }}
    </div>

    <div class="card-info">
      <span v-if="pokemonInfo.types && pokemonInfo.types[0] && pokemonInfo.types[0].type && pokemonInfo.types[0].type.name">
        {{ pokemonInfo.types[0].type.name }}
      </span>
    </div>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "PokemonCard",
  props: ['pokemon'],
  data() {
    return {
      pokemonInfo: [],
    }
  },
  methods: {
  },
  async created() {
    try {
      const apiResponse = await axios(this.pokemon.url)
      this.pokemonInfo = apiResponse.data
      console.log(this.pokemonInfo)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="scss" scoped>

.card {
  display: grid;
  grid-template-columns: 1fr;
}

</style>
