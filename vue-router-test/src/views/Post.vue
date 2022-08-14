<script setup lang=ts>

import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();

</script>

<template>
    <div class="post-container">
        <button @click="router.back()">Go Back</button>
        <h2>
            This is a Post Page
        </h2>
        
        <p>
           Post no: {{ route.params.id }}
        </p>
        
        <router-link :to="{
            name: 'Post',
            params: {
                id: 2,
                details: 'Pariatur tenetur earum suscipit aspernatur. Voluptas et perferendis dolorum.'
            }
        }"> Post Details </router-link>
        
    </div>
</template>

<style scoped>
h2 {
    margin-top: 8px;
}

button {
    margin-top: 8px;
    color: #fff;
}
</style>