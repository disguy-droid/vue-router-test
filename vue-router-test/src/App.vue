<script setup lang="ts">
</script>

<template>
  <div id="app" class="h-screen w-full flex flex-col items-center font-clashGrotesk">
      <div class="py-8">
          <router-link to="/" class="router-link">
            Home
          </router-link> ~
          <router-link to="/about" class="router-link">
            About
          </router-link>
      </div>
      
    <router-view>
    </router-view>
  </div>
</template>

<style>
</style>
