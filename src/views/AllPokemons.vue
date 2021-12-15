<template>

  <div class="wrapper">
    <div
        class="card-list"
        v-for="pokemon in pokemons"
        :key="pokemon.name"
    >
      <AsyncPokemon v-if="pokemon" class="card" :pokemon="pokemon"/>
    </div>
  </div>

  <div
      class="to-top"
      @click="toTop"
      v-show="screenY > 300"
  >
    <Icon icon="akar-icons:arrow-up-thick" width="80"/>
  </div>

</template>

<script>
import axios from "axios";
import {defineAsyncComponent} from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader";
import {Icon} from "@iconify/vue";

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
    Icon,
  },
  data() {
    return {
      pokemons: [],
      scTimer: 0,
      screenY: 0,
      offset: 0,
      bottom: false,
    }
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.screenY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    async getData() {
      const basePath = "https://pokeapi.co/api/v2/"
      const allPokemons = `pokemon?limit=100&offset=${this.offset}`
      const url = basePath + allPokemons
      try {
        const apiResponse = await axios(url)
        console.log("api")
        apiResponse.data.results.forEach(e => {
          this.pokemons.push(e)
        })
      } catch (e) {
        console.error(e)
      }
      if (this.bottomVisible()) {
        await this.getData()
      }
    },
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.offset += 100
        this.getData()
      }
    },
  },
  async created() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
    await this.getData()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>

.wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2em 2em;
  grid-auto-rows: minmax(100px, auto);
  margin: 30px;

  .card {
    grid-auto-rows: 1fr;
    margin: 0;
  }
}

svg {
  background: gray;
  border-radius: 15px;
  border: 5px solid black;
}

.to-top {
  position: fixed;
  z-index: 999;
  right: 50px;
  bottom: 70px;
  width: 50px;
  height: 50px;
  color: black;
  transition: 0.5s;
  &:hover {
    color: #d30000;
    cursor: pointer;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 100px;
  }
}

</style>
