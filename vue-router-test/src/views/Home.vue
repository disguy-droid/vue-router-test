<script setup lang="ts">
</script>

<template>
    <div class="home-container">
        <h2>
            Hello Vue - This is Home Page.
        </h2>
        
        <div class="post-container">
            
            <router-link :to="{
                name: 'Post',
                params: {
                    id: 1
                }
            }" class="router-link">First Post</router-link>
        </div>
    </div>
</template>

<style scoped>
.home-container {
    height: 100vh;
    width: 100%;
}

h2 {
    margin-top: 8px;
}

.post-container {
    margin-top: 8px;
}


.router-link {
    text-decoration: none;
}
</style>