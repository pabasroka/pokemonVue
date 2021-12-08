<template>

  <div class="pokemon-wrapper">

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
      colorType: '#7f139b',
    }
  },
  methods: {
  },
  created() {
    switch (this.apidata.types[0].type.name) {
      case 'normal':
        this.colorType = '#ea1b1b'
        break;
      case 'water':
        this.colorType = '#0909f5'
        break;
      case 'electric':
        this.colorType = '#efef30'
        break;
      default:
        this.colorType = '#7f139b'
        break;
      }
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

$colorType: b-vind(colorType);

.pokemon-wrapper {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  box-shadow: 0 14px 18px 0 rgba(0,0,0,0.4);
  border: 15px solid v-bind(colorType);
  border-radius: 15px;
  transition: 0.3s;
  background: v-bind(colorType);

  .pokemon-name {
    padding-left: 50px;
    text-align: start;
    color: black;
    text-shadow: -1px -1px 0 v-bind(colorType), 1px -1px 0 v-bind(colorType), -1px 1px 0 v-bind(colorType), 1px 1px 0 v-bind(colorType);
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



</style>
