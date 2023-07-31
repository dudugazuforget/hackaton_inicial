<script setup>
import { imoveis } from '@/_data/imoveis.js';


</script>

<template>
  <div class="title">
    <h1>Casas que são a sua cara</h1>
  </div>
  <div class="listagem-imoveis">
    <div v-for="imovel in imoveis" :key="imovel.id" class="card-casa">
      <hr>
      <span><button>Vende-se</button></span>
      <p class="imovel-valor">R${{ imovel.valor }}.000</p>
      <img :src="imovel.img" alt="capa" class="imovel-capa">
      <p class="imovel-local">{{ imovel.local }}</p>
  
      <hr>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins%3Awght%40100%3B200%3B300%3B400&display=swap%27%29%3B');

.listagem-imoveis {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 35px;
}

.card-casa {
  margin: 0 50px;
  margin-top: 150px;
}

.title {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 10vh;
  border: 0;
  background-color: rgb(44, 40, 40);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: rgb(255, 131, 30);
}

.imovel-local {
  color: rgb(252, 121, 14);
  font-family: 'Poppins', sans-serif;
}

img {
  width: 300px;
  height: 300px;

}

button {
  position: relative;
  border: 0;
  background-color: rgb(19, 88, 19);
  color: white;
  font-family: 'Poppins', sans-serif;
  border-radius: 50px;
  height: 25px;
  width: 95px;
  left: 250px;


}
.imovel-valor{
  margin-top: -30px;
  margin-bottom: 60px;
  font-family: 'Poppins', sans-serif;
  
}
#coracao {
    display: none;
  }

  #coracao:checked + label > svg {
    animation: preencher;
    animation-duration: .5s;
    animation-fill-mode: forwards;
  }

  @keyframes preencher {
    0% {
      fill: transparent;
    }
    100% {
      fill: green;
    }
  }
</style>
