<template>
  <nav>

    <div
        class="hamburger"
        @click="showNav = !showNav"
    >
      <div class="top-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div>
    </div>

    <div id="nav" v-if="showNav" :class="{'open': !showNav}">
      <ul>
        <li>
          <router-link to="/" @click="showNav = !showNav">HOME</router-link>
        </li>
        <li>
          <router-link to="/all" @click="showNav = !showNav">ALL</router-link>
        </li>
        <li>
          <router-link to="/info" @click="showNav = !showNav">INFO</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "NavBarMobile",
  data() {
    return {
      showNav: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

#nav {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: blue;
  transition: 1s transform cubic-bezier(0, .12, .14, 1);

  li {
    list-style: none;
    align-items: center;
    margin-top: 90px;
  }

  a {
    color: black;
    font-weight: bold;
    font-family: pokemonSolid,serif;
    font-size: 40px;
    letter-spacing: 3px;
    text-decoration: none;
    text-shadow: -2px -2px 0 v.$secondary, 2px -2px 0 v.$secondary, -2px 2px 0 v.$secondary, 2px 2px 0 v.$secondary;
  }

  a.router-link-exact-active{
    color: v.$secondary;
    text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000, 5px 5px 0 #000;
  }
}

.open {
  transform: translateX(-100vw);
}
</style>
