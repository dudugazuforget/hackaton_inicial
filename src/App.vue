<script setup>
import {imoveis} from '@/_data/imoveis.js';

</script>

<template>
  <h1>Casas que são a sua cara</h1>
<div>
  <div v-for="casa in imoveis">
    <hr>
    <p class="Casa-valor">{{ casa.valor }}</p>
    <button>vende-se</button>
    <img :src= 'casa.img'>
  </div>
</div>
</template>

<style scoped>
img{
  width: 300px;
  height: 300px;
  
}
button{
  background-color: rgb(10, 43, 10);
  color: white;
  border-radius: 50px;

}
</style>
