<script setup lang="ts">
</script>

<template>
  <div id="app">
      <router-link to="/" class="router-link">
          Home
      </router-link> |
      <router-link to="/about" class="router-link">
          About
      </router-link>
      
    <router-view>
    </router-view>
  </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    min-height: 100vh;
    width: 100%;
    background-color: #fff;
    color: #000;
}

.router-link {
    color: #000;
    text-decoration: none;
}


</style>
