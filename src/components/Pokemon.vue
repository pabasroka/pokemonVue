<template>

  <div class="pokemon-wrapper">

  </div>

  <h1>{{ apidata.name.toUpperCase() }}</h1>
  <img v-bind:src="apidata.sprites.front_default" alt="sprite">
</template>

<script>
export default {
  name: "Pokemon",
  props: ['apidata'],
  data() {
    return {
    }
  },
  created() {
    console.log(this.apidata);
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;



.pokemon-wrapper {

}

</style>
