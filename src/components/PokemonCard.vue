<template>

  <div class="card" :class="colorTheme">

    <div class="card-top">

      <div class="card-name">
          {{ pokemon.name }}
      </div>

      <div class="card-type">
           <span v-if="pokemonInfo.types && pokemonInfo.types[0] && pokemonInfo.types[0].type && pokemonInfo.types[0].type.name">
            {{ pokemonInfo.types[0].type.name }}
           </span>
      </div>

    </div>

    <div class="card-bottom">

      <div class="card-image">
        <img v-if="pokemonInfo && pokemonInfo.sprites && pokemonInfo.sprites.front_default" v-bind:src="pokemonInfo.sprites.front_default" alt="sprite">
      </div>

    </div>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "PokemonCard",
  props: ['pokemon'],
  components: {
  },
  data() {
    return {
      pokemonInfo: [],
      colorTheme: 'normal',
    }
  },
  methods: {
  },
  // TODO!!! optimize get api request
  async created() {
    try {
      const apiResponse = await axios(this.pokemon.url)
      this.pokemonInfo = apiResponse.data
      this.colorTheme = this.pokemonInfo.types[0].type.name ?? 'normal'
      console.log(this.pokemonInfo)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

.card {
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 15px;
  box-shadow: 0 58px 58px 0 lighten(#ff1d1d, 50%);

  .card-top {
    .card-name, .card-type {
      display: inline-block;

      font-size: 20px;
      letter-spacing: 1px;
    }
    .card-name {
      width: 70%;
      padding-left: 10px;
      text-align: start;
    }
    .card-type {
      width: 15%;
      padding-right: 30px;
      text-align: center;
    }
  }

}

// POKEMONS TYPE THEME TODO: CHANGE TO MIXIN OR SOMETHING LIKE THAT
.normal {
  color: darken(v.$normal, 30%);
  background: v.$normal;
  border: 15px solid darken(v.$normal, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$normal, 20%);
  p {
    color: darken(v.$normal, 30%);
  }
  .underline {
    color: darken(v.$normal, 30%);
  }
}

.water {
  color: darken(v.$water, 40%);
  background: v.$water;
  border: 15px solid darken(v.$water, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$water, 20%);
  p {
    color: darken(v.$water, 30%);
  }
  .underline {
    color: darken(v.$water, 30%);
  }
}

.electric {
  color: darken(v.$electric, 40%);
  background: v.$electric;
  border: 15px solid darken(v.$electric, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$electric, 20%);
  p {
    color: darken(v.$electric, 30%);
  }
  .underline:after {
    background: darken(v.$electric, 30%);
  }
}

.fire {
  color: darken(v.$fire, 40%);
  background: v.$fire;
  border: 15px solid darken(v.$fire, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$fire, 20%);
  p {
    color: darken(v.$fire, 30%);
  }
  .underline:after {
    background: darken(v.$fire, 30%);
  }
}

.grass {
  color: darken(v.$grass, 40%);
  background: v.$grass;
  border: 15px solid darken(v.$grass, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$grass, 20%);
  p {
    color: darken(v.$grass, 30%);
  }
  .underline:after {
    background: darken(v.$grass, 30%);
  }
}

.ice {
  color: darken(v.$ice, 40%);
  background: v.$ice;
  border: 15px solid darken(v.$ice, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$ice, 20%);
  p {
    color: darken(v.$ice, 30%);
  }
  .underline:after {
    background: darken(v.$ice, 30%);
  }
}

.fighting {
  color: darken(v.$fighting, 40%);
  background: v.$fighting;
  border: 15px solid darken(v.$fighting, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$fighting, 20%);
  p {
    color: darken(v.$fighting, 30%);
  }
  .underline:after {
    background: darken(v.$fighting, 30%);
  }
}

.poison {
  color: darken(v.$poison, 40%);
  background: v.$poison;
  border: 15px solid darken(v.$poison, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$poison, 20%);
  p {
    color: darken(v.$poison, 30%);
  }
  .underline:after {
    background: darken(v.$poison, 30%);
  }
}

.ground {
  color: darken(v.$ground, 40%);
  background: v.$ground;
  border: 15px solid darken(v.$ground, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$ground, 20%);
  p {
    color: darken(v.$ground, 30%);
  }
  .underline:after {
    background: darken(v.$ground, 30%);
  }
}

.flying {
  color: darken(v.$flying, 40%);
  background: v.$flying;
  border: 15px solid darken(v.$flying, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$flying, 20%);
  p {
    color: darken(v.$flying, 30%);
  }
  .underline:after {
    background: darken(v.$flying, 30%);
  }
}

.psychic {
  color: darken(v.$psychic, 40%);
  background: v.$psychic;
  border: 15px solid darken(v.$psychic, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$psychic, 20%);
  p {
    color: darken(v.$psychic, 30%);
  }
  .underline:after {
    background: darken(v.$psychic, 30%);
  }
}

.bug {
  color: darken(v.$bug, 40%);
  background: v.$bug;
  border: 15px solid darken(v.$bug, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$bug, 20%);
  p {
    color: darken(v.$bug, 30%);
  }
  .underline:after {
    background: darken(v.$bug, 30%);
  }
}

.rock {
  color: darken(v.$rock, 40%);
  background: v.$rock;
  border: 15px solid darken(v.$rock, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$rock, 20%);
  p {
    color: darken(v.$rock, 30%);
  }
  .underline:after {
    background: darken(v.$rock, 30%);
  }
}

.ghost {
  color: darken(v.$ghost, 40%);
  background: v.$ghost;
  border: 15px solid darken(v.$ghost, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$ghost, 20%);
  p {
    color: darken(v.$ghost, 30%);
  }
  .underline:after {
    background: darken(v.$ghost, 30%);
  }
}

.dragon {
  color: darken(v.$dragon, 40%);
  background: v.$dragon;
  border: 15px solid darken(v.$dragon, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$dragon, 20%);
  p {
    color: darken(v.$dragon, 30%);
  }
  .underline:after {
    background: darken(v.$dragon, 30%);
  }
}

.dark {
  color: darken(v.$dark, 40%);
  background: v.$dark;
  border: 15px solid darken(v.$dark, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$dark, 20%);
  p {
    color: darken(v.$dark, 30%);
  }
  .underline:after {
    background: darken(v.$dark, 30%);
  }
}

.steel {
  color: darken(v.$steel, 40%);
  background: v.$steel;
  border: 15px solid darken(v.$steel, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$steel, 20%);
  p {
    color: darken(v.$steel, 30%);
  }
  .underline:after {
    background: darken(v.$steel, 30%);
  }
}

.fairy {
  color: darken(v.$fairy, 40%);
  background: v.$fairy;
  border: 15px solid darken(v.$fairy, 30%);
  box-shadow: 0 0 50px 20px lighten(v.$fairy, 20%);
  p {
    color: darken(v.$fairy, 30%);
  }
  .underline:after {
    background: darken(v.$fairy, 30%);
  }
}

</style>
