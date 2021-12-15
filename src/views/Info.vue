<template>

<h1>information about page</h1>

  <div class="about">
    <p>
      Website used
      <a href="https://pokeapi.co/" target="_blank" title="API">POKEMON API</a>
      which has all the Pokémon data
    </p>
    <p>
      PokéAPI V1 was created by Paul Hallett as a weekend project but it quickly became more than a weekend's worth of work.
      In December of 2014 Paul deprecated V1 in favor of working on V2.
      This is where Zane Adickes jumped in. Zane thought the original project was a fantastic idea and wanted to help it grow.
      With direction from Paul, Zane created the V2 API using an exact mirror of Veekun's data related to the main series of games.
    </p>
  </div>

  <div class="social">
    <p>
      <u>
        Check out my other projects
      </u>
    </p>
    <a href="https://github.com/pabasroka" target="_blank" title="GITHUB">
      <Icon icon="logos:github-icon" width="100" height="100"/>
    </a>
  </div>

</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: "Info",
  components: {
    Icon,
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

h1 {
  letter-spacing: 2px;
}

.about {
  p {
    padding: 10px 10%;
  }
  a {
    color: v.$primary;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 2px;
    transition: .5s;
    &:hover {
      color: darken(v.$secondary, 20%);
    }
  }
}

</style>
