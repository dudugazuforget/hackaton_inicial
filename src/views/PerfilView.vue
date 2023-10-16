<script setup>
import NavBar from '../components/NavBar.vue';
</script>

<template>
<NavBar/>

<div class="container">
    <div class="sub-container"></div>
</div>
</template>

<style scoped>

.sub-container{
width: 90vh;
height: 50vh;
background-color: rgb(29, 28, 26);
}
.container{
    display: flex;
    justify-content: center;
    align-items: center ;
    width: 100%;
    height: 100vh;
    background-color: cornsilk;
}
</style>
    