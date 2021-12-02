<template>

  <h1>"gotta catch em all"</h1>
  <SearchBar />

</template>

<script>

import SearchBar from "@/components/SearchBar";

export default {
  name: 'Home',
  components: {
    SearchBar,
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
</style>
