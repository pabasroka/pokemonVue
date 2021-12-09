<template>

  <div class="card">

    <div class="card-image">

    </div>

    <div class="card-info">
      {{ pokemon.name }}
    </div>

  </div>

</template>

<script>
export default {
  name: "PokemonCard",
  props: ['pokemon'],
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>
