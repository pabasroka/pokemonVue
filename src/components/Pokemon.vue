<template>

  <div class="pokemon-wrapper" :class="colorTheme">

    <div class="pokemon-name">
      <p class="underline">
        {{ apidata.name.toUpperCase() }}
      </p>
    </div>

    <div class="pokemon-image-wrapper">
      <div class="pokemon-image">
        <div class="pokemon-image-inner">

          <div class="pokemon-image-front">
            <img v-bind:src="apidata.sprites.front_default" alt="sprite front">
          </div>

          <div class="pokemon-image-back">
            <img v-bind:src="apidata.sprites.back_default" alt="sprite back">
          </div>

        </div>
      </div>
    </div>


    <div class="pokemon-info">

      <ul>
        <li v-for="ability in apidata.abilities" :key="ability.name">
          {{ ability.name }} jakis tekst
        </li>
      </ul>

    </div>

  </div>

</template>

<script>
export default {
  name: "Pokemon",
  props: ['apidata'],
  data() {
    return {
      colorTheme: this.apidata.types[0].type.name ?? 'normal',
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

.pokemon-wrapper {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  border-radius: 15px;
  transition: 0.3s;

  .pokemon-name {
    padding-left: 50px;
    text-align: start;
    color: black;
    text-shadow: -1px -1px 0 white, 1px -1px 0 black, -1px 1px 0 white, 1px 1px 0 black;
  }
  .underline {
    font-size: 25px;
    letter-spacing: 2px;
    text-decoration: none;
    position: relative;
  }
  .underline:after {
    content : "";
    position : absolute;
    width : 25%;
    height : 3px;
    background-color: black;
    bottom: 0;
    left: 0;
  }

  .pokemon-image-wrapper, .pokemon-info {
    display: inline-block;
    box-sizing: border-box;
  }

  .pokemon-image-wrapper {
    width: 20%;
    padding-left: 50px;

    .pokemon-image {
      background-color: transparent;
      width: 200px;
      height: 200px;
    }

    .pokemon-image-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    .pokemon-image:hover .pokemon-image-inner {
      transform: rotateY(180deg);
    }

    .pokemon-image-front, .pokemon-image-back{
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
    }

    .pokemon-image-back {
      transform: rotateY(180deg);
    }

    img {
      width: 120%;
    }

  }

  .pokemon-info {
    width: 80%;
    padding: 0 50px;

    ul {
      li {
        list-style-type: none;
      }
    }
  }
}

// POKEMONS TYPE THEME TODO: CHANGE TO MIXIN OR SOMETHING LIKE THAT
.normal {
  color: darken(v.$normal, 30%);
  background: v.$normal;
  border: 15px solid darken(v.$normal, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$normal, 30%);
  p {
    color: darken(v.$normal, 30%);
  }
  .underline {
    color: darken(v.$normal, 30%);
  }
}

.water {
  color: darken(v.$water, 30%);
  background: v.$water;
  border: 15px solid darken(v.$water, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$water, 30%);
  p {
    color: darken(v.$water, 30%);
  }
  .underline {
    color: darken(v.$water, 30%);
  }
}

.electric {
  color: darken(v.$electric, 30%);
  background: v.$electric;
  border: 15px solid darken(v.$electric, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$electric, 30%);
  p {
    color: darken(v.$electric, 30%);
  }
  .underline:after {
    background: darken(v.$electric, 30%);
  }
}

.fire {
  color: darken(v.$fire, 30%);
  background: v.$fire;
  border: 15px solid darken(v.$fire, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$fire, 30%);
  p {
    color: darken(v.$fire, 30%);
  }
  .underline:after {
    background: darken(v.$fire, 30%);
  }
}

.grass {
  color: darken(v.$grass, 30%);
  background: v.$grass;
  border: 15px solid darken(v.$grass, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$grass, 30%);
  p {
    color: darken(v.$grass, 30%);
  }
  .underline:after {
    background: darken(v.$grass, 30%);
  }
}

.ice {
  color: darken(v.$ice, 30%);
  background: v.$ice;
  border: 15px solid darken(v.$ice, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$ice, 30%);
  p {
    color: darken(v.$ice, 30%);
  }
  .underline:after {
    background: darken(v.$ice, 30%);
  }
}

.fighting {
  color: darken(v.$fighting, 30%);
  background: v.$fighting;
  border: 15px solid darken(v.$fighting, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$fighting, 30%);
  p {
    color: darken(v.$fighting, 30%);
  }
  .underline:after {
    background: darken(v.$fighting, 30%);
  }
}

.poison {
  color: darken(v.$poison, 30%);
  background: v.$poison;
  border: 15px solid darken(v.$poison, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$poison, 30%);
  p {
    color: darken(v.$poison, 30%);
  }
  .underline:after {
    background: darken(v.$poison, 30%);
  }
}

.ground {
  color: darken(v.$ground, 30%);
  background: v.$ground;
  border: 15px solid darken(v.$ground, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$ground, 30%);
  p {
    color: darken(v.$ground, 30%);
  }
  .underline:after {
    background: darken(v.$ground, 30%);
  }
}

.flying {
  color: darken(v.$flying, 30%);
  background: v.$flying;
  border: 15px solid darken(v.$flying, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$flying, 30%);
  p {
    color: darken(v.$flying, 30%);
  }
  .underline:after {
    background: darken(v.$flying, 30%);
  }
}

.psychic {
  color: darken(v.$psychic, 30%);
  background: v.$psychic;
  border: 15px solid darken(v.$psychic, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$psychic, 30%);
  p {
    color: darken(v.$psychic, 30%);
  }
  .underline:after {
    background: darken(v.$psychic, 30%);
  }
}

.bug {
  color: darken(v.$bug, 30%);
  background: v.$bug;
  border: 15px solid darken(v.$bug, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$bug, 30%);
  p {
    color: darken(v.$bug, 30%);
  }
  .underline:after {
    background: darken(v.$bug, 30%);
  }
}

.rock {
  color: darken(v.$rock, 30%);
  background: v.$rock;
  border: 15px solid darken(v.$rock, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$rock, 30%);
  p {
    color: darken(v.$rock, 30%);
  }
  .underline:after {
    background: darken(v.$rock, 30%);
  }
}

.ghost {
  color: darken(v.$ghost, 30%);
  background: v.$ghost;
  border: 15px solid darken(v.$ghost, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$ghost, 30%);
  p {
    color: darken(v.$ghost, 30%);
  }
  .underline:after {
    background: darken(v.$ghost, 30%);
  }
}

.dragon {
  color: darken(v.$dragon, 30%);
  background: v.$dragon;
  border: 15px solid darken(v.$dragon, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$dragon, 30%);
  p {
    color: darken(v.$dragon, 30%);
  }
  .underline:after {
    background: darken(v.$dragon, 30%);
  }
}

.dark {
  color: darken(v.$dark, 30%);
  background: v.$dark;
  border: 15px solid darken(v.$dark, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$dark, 30%);
  p {
    color: darken(v.$dark, 30%);
  }
  .underline:after {
    background: darken(v.$dark, 30%);
  }
}

.steel {
  color: darken(v.$steel, 30%);
  background: v.$steel;
  border: 15px solid darken(v.$steel, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$steel, 30%);
  p {
    color: darken(v.$steel, 30%);
  }
  .underline:after {
    background: darken(v.$steel, 30%);
  }
}

.fairy {
  color: darken(v.$fairy, 30%);
  background: v.$fairy;
  border: 15px solid darken(v.$fairy, 30%);
  box-shadow: 0 18px 28px 0 lighten(v.$fairy, 30%);
  p {
    color: darken(v.$fairy, 30%);
  }
  .underline:after {
    background: darken(v.$fairy, 30%);
  }
}

</style>
