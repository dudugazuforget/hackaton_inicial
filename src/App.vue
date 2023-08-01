<script setup>
import { imoveis } from '@/_data/imoveis.js';



</script>

<template>
  <div class="title">
    <h1 class="name-title">IfCoders</h1>
    <button class="sobre-nos">Sobre nós</button>
    <button class="contato">Contato</button>
    <button class="anunciar">Anunciar</button>

  </div>
  <div class="navbar"></div>
  <div class="listagem-imoveis">
    <div v-for="imovel in imoveis" :key="imovel.id" class="card-casa">
      <img :src="imovel.img" alt="capa" class="imovel-capa">
      <hr>
      <span><button class="b-alugar">Alugar</button></span>
      <p class="imovel-valor">R${{ imovel.valor }}.000</p>
      <p class="imovel-local">{{ imovel.local }}</p>
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
  margin: 0 29px;
  margin-top: 300px;
  background-color: rgb(241, 235, 235);
  border-radius: 20px;
  width: 360px;

}

.anunciar {
  position: absolute;
  background-color: transparent;
  color: rgb(200, 221, 200);
  border: 0;
  margin-top: -37px;
  margin-left: 460px;
}

.contato {
  position: absolute;
  background-color: transparent;
  color: rgb(200, 221, 200);
  border: 0;

  margin-top: -37px;
  margin-left: 350px;
}

.sobre-nos {
  position: absolute;
  background-color: transparent;
  color: rgb(200, 221, 200);
  border: 0;
  margin-top: -37px;
  margin-left: 230px;
}

.imovel-capa {
 
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;

}

.name-title {
  margin-top: 20px;
  margin-left: 20px;
  color: rgb(34, 161, 34);
}

.title {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 10vh;
  border: 0;
  background-color: rgb(44, 40, 40);
  text-align: left;
  font-family: 'Poppins', sans-serif;
  color: rgb(200, 221, 200);
  font-weight: bold;

}

.imovel-local {
  margin-top: -40px;
  margin-bottom: 50px;
  margin-left: 5px;
  color: rgb(15, 9, 4);
  font-family: 'Poppins', sans-serif;
}

img {
  width: 300px;
  height: 300px;

}

.b-alugar {
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

.imovel-valor {
  margin-top: -30px;
  margin-bottom: 60px;
  margin-left: 7px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

}</style>
