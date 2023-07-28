<script setup>
import { imoveis } from '@/_data/imoveis.js';

</script>

<template>
  <h1>casas que são a sua cara</h1>


  <div class="listagem-imoveis">
    <div v-for="imovel in imoveis" :key="imovel.id" class="card-casa">
      <hr>
      <button>Vende-se</button>
      <p class="imovel-valor">{{ imovel.valor }}</p>
      <img :src="imovel.img" alt="capa" class="imovel-capa">
      <p class="imovel-local">{{ imovel.local }}</p>
      <hr>
    </div>
  </div>
</template>

<style scoped>
.listagem-imoveis {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 100px;
}

.card-casa {
  margin: 0 50px;
}

img {
  width: 300px;
  height: 300px;

}

button {
  background-color: rgb(10, 43, 10);
  color: white;
  border-radius: 50px;

}
</style>
