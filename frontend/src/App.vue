<template>
  <div id="app">
      <nav>
          <router-link to="/">Destinations</router-link> |
          <router-link to="/planning">Planning</router-link> |
          <router-link to="/booking">Booking</router-link>
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>
