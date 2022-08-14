<script setup lang=ts>

import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();

</script>

<template>
    <div class="post-container">
        <h2>
            This is a Post Page
        </h2>
        
        <p>
           Post no: {{ route.params.id }}
        </p>
    </div>
</template>

<style scoped>
h2 {
    margin-top: 8px;
}
</style>