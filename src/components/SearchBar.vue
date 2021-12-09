<template>

  <div class="search-wrapper">

      <input
          type="text"
          v-model="phrase"
          placeholder="type eg. Magikarp"
          :class="[mobileView ? 'm-search' : 'search',searchError ? 'error' : '']"
          @keyup.enter="getPokemon"
      >

      <button
          :class="{ invisible: !phrase }"
          class="search-button"
          @click="getPokemon"
          v-if="mobileView"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </button>

      <p v-if="searchError" class="error">
        Incorrect phrase
      </p>

    <PulseLoader :loading="loading" :color="'#3b3b00'" :size="'70px'"></PulseLoader>

  </div>

</template>

<script>
import axios from "axios";
import PulseLoader from 'vue-spinner/src/PulseLoader';

export default {
  name: "SearchBar",
  components: {
    PulseLoader,
  },
  data() {
    return {
      phrase: 'magikarp',
      mobileView: false,
      searchError: false,
      loading: false,
    }
  },
  methods: {
    async getPokemon() {
      this.loading = true
      this.searchError = false
      const basePath = "https://pokeapi.co/api/v2/"
      const findPokemon = "pokemon/"
      const url = basePath + findPokemon + this.phrase.toLowerCase()
      try {
        const apiResponse = await axios(url)
        this.$emit('clear')
        this.$emit('pokemonResponse', apiResponse.data)
      } catch (e) {
        console.error(e);
        this.searchError = true
      } finally {
        this.loading = false
      }
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990
    },
  },
  created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

.search-wrapper {

  margin-bottom: 100px;

  .invisible {
    visibility: hidden;
  }

  input {
    background: none;
    flex-grow: 2;
    height: 50px;
    border: 0;
    border-bottom: 2px solid black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: box-shadow .5s;
    text-align: center;
  }

  input:focus {
    outline: none;
    -webkit-box-shadow: 0px 24px 17px -7px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 24px 17px -7px rgba(0, 0, 0, 1);
    box-shadow: 0px 24px 17px -7px rgba(0, 0, 0, 1);
    background: #00000020;
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

  .search {
    width: 20vw;
  }

  .error {
    color: red;
    border-color: red;
  }

}

.search-button {
  border: none;
  background: #e0e0e0;
}

//mobile
.m-search {
  width: 80vw;
}



</style>
