<script setup>
import NavBar from '../components/NavBar.vue';
import { perfil } from '../_data/login';
</script>

<template>
<NavBar/>

<div class="container">
    <div class="sub-container">
        <h3>Username: {{ perfil.username }}</h3>
        <h3>Cidade: {{ perfil.cidade }}</h3>
        <h3>{{ perfil.senha }}</h3>

    </div>
</div>
</template>
<style scoped>

.sub-container{
width: 90vh;
height: 50vh;
background-color: rgb(44, 40, 40);
border-radius: 5px;
box-shadow: 5px 5px 0px 0px rgb(50, 100, 43);
color: aliceblue;
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
    