<script setup>
import HomePage from '../components/HomePage.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

function goAbout(){
router.push('/about')
}
</script>

<template>

  
    <home-page/>

</template>
