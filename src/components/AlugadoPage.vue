<script>
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import {imovel} from '@/views/AlugarView.vue'
const router = useRouter()
function goHome() {
    router.push('/home')
}
const localUsuario = ref("")


</script>
<template>
     
     <div class="title">
        <h1 @click="goHome" class="name-titleL">IfCoders</h1>
    </div>

    <div class="background-card">

        <div class="visita">
            <h2>Agendar visita</h2>
            <input type="text" placeholder="Nome" name="Nome" id="Nome">
            <input type="email" placeholder="Email" name="email" id="email">
            <input type="week" name="data" id="data">
            <button type="submit">Agendar</button>
            <p>{{ imovel?.local }}</p>
        </div>

        <div class="distancia">
            <h2>Distancia do imovel</h2>
            <input type="text" v-model="localUsuario" name="" id="">
            <P>O imovel esta há ...Km de vc</P>
        </div>
    </div>

</template>
<style>
.distancia{
    width: 400px;
    height: 400px;
    background-color: rgb(44, 40, 40);
    color: rgb(34, 161, 34);
    text-align: center;
    box-shadow: 5px 4px rgba(34, 161, 34, 0.623) ;
    border-radius: 5px;
}
.distancia input{
    width: 200px;
    height: 40px;
    border: 0; 
    border-radius: 5px;
    
}
.visita{
    width: 400px;
    height: 400px;
    background-color:rgb(44, 40, 40);
    color: rgb(34, 161, 34);
    text-align: center;
    box-shadow: 5px 4px rgba(34, 161, 34, 0.623) ;
    border-radius: 5px;

}   
.visita input{
    width: 200px;
    height: 40px;
    margin: 1rem;
    border: 0;
    font-size: medium;
    border-radius: 5px;
}
.visita button{
    width: 200px;
    height: 40px;
    border: 0;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 5px;
}
.visita button:hover{
    background-color: rgba(179, 187, 180, 0.575);
    box-shadow: 0px 2px rgba(34, 161, 34, 0.623)
    
}
.background-card{
display: flex;
align-items: center;
gap: 10vh;
height: 100vh;
width: 100vh;
}
.name-titleL {
    color: rgb(34, 161, 34);
    cursor: pointer;
    transition: 0.5s;
    margin-top: 0px;
    margin-bottom: 0px;
}

.name-titleL:hover {
    font-size: 35px;

}
.title {
    margin: 0;
    width: 100%;
    height: 54px;
    border: 0;
    background-color: rgb(44, 40, 40);
    text-align: left;
    font-family: 'Poppins', sans-serif;
    color: rgb(200, 221, 200);
    font-weight: bold;
    z-index: 3;
}

</style>