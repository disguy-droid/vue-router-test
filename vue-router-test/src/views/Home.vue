<script setup lang="ts">
import autoAnimate from '@formkit/auto-animate'
import { ref, onMounted } from 'vue'

const target = ref()

onMounted(() => {
    autoAnimate(target.value)
})


    

</script>

<template>
    <div class="bg-gray-50 min-h-screen w-full font-clashGrotesk">
        <h2 class="text-2xl font-medium text-center mt-8">
            Hello Vue - This is Home Page.
        </h2>
        <div class="post-container flex justify-center" >
            <router-link :to="{
                name: 'Post',
                params: {
                    id: 1
                }
            }" class="router-link text-blue-500 mt-8">First Post</router-link>
        </div>
        <div ref="target" class="mt-8 w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
            <div id="card" class="bg-gray-300 py-8 px-4 rounded-lg" v-for="data in 10">
                <h1 class="text-2xl font-bold text-neutral-900 uppercase">Title</h1>
                <p class="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
</style>