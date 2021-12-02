<template>

  <div class="search-wrapper">

      <input type="text" v-model="phrase" placeholder="type eg. Magikarp">

      <button
          :class="{ invisible: !phrase }"
          class="search"
          v-on:click="getPokemon"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </button>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "SearchBar",
  data() {
    return {
      phrase: '',
    }
  },
  methods: {
    test() {
      console.log(this.phrase);
    },
    getPokemon() {
      const basePath = "https://pokeapi.co/api/v2/";
      const findPokemon = "pokemon/";
      const url = basePath + findPokemon + this.phrase;
      axios
          .get(url)
          .then(response => (this.info = response.data))
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;



.search-wrapper {

  .invisible {
    visibility: hidden;
  }

  input {
    background: v.$white;
    flex-grow: 2;
    border-radius: 10px;
    width: 40vw;
    height: 50px;
  }

  input:focus {
    outline: none;
  }

  button {
    color: black;
    border: none;
    outline: none;
    background: none;
  }

  button:hover {
    cursor: pointer;
  }

}

.search {
  border: none;
  background: #e0e0e0;
}



</style>
