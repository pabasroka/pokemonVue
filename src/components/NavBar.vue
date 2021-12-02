<template>
  <nav>
    <div id="nav">
      <router-link to="/">POKEMON</router-link>|
      <router-link to="/all">ALL</router-link>|
      <router-link to="/info">INFO</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
#nav a{
  padding: 30px;
  color: blue;
  font-size: 22px;
  font-weight: bold;
}
#nav a.router-link-exact-active{
  color: red;
}
</style>
