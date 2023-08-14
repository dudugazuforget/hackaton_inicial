<script setup>
import { imoveis } from '@/_data/imoveis.js';
import { stringifyQuery } from 'vue-router';




</script>


<template>
  <div class="title">
    <h1 @click="$router.push('/')" class="name-title">IfCoders</h1>

    <div>
      <button @click="toggleSobreNos" class="sobre-nos">{{ mostrar_sb ? 'Voltar' : 'Sobre nós'
      }}</button>
      <div v-if="mostrar_sb" class="sobre">
        <p class="text-sobre">
          Somos a <span style="color:rgb(34, 161, 34);">IfCoders</span>, uma inovadora empresa de locação de imóveis
          fundada por dois jovens empreendedores programadores. Unimos tecnologia e expertise no mercado imobiliário para
          simplificar e aprimorar a experiência de locação. Nossa plataforma intuitiva e orientada por dados conecta
          proprietários e inquilinos de forma rápida e segura. Valorizamos o atendimento ao cliente e buscamos criar uma
          comunidade confiável e sustentável. Junte-se a nós nessa jornada rumo a uma locação de imóveis mais inteligente
          e gratificante. Bem-vindo à <span style="color:rgb(34, 161, 34);">IfCoders</span>!
        </p>
      </div>
    </div>
    <div>
      <button @click="toggleContato" class="contato">{{ mostrar_ct ? 'voltar' : 'Contato' }}</button>
      <div v-if="mostrar_ct" class="sobre">
        <p>Entre em contato conosco! Estamos aqui para ajudar. Use o numero abaixo ou nosso email de contato
          para falar conosco. Esperamos por sua mensagem! <br>
          <span style="color:rgb(34, 161, 34);">
            <PhoneOutline />: (47)984975167
          </span><br>
          <span style="color:rgb(34, 161, 34);">
            <EmailOutline />: ifCoders@gmail.com
          </span>
        </p>
      </div>
    </div>
  </div>
  <router-view />
</template>


<style scoped>
.name-title {
  margin-top: 20px;
  margin-left: 20px;
  color: rgb(34, 161, 34);
}


.title {
  position: fixed;
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
  cursor: pointer;
  z-index: 3;
}


.sobre {
  position: absolute;
  padding: 20px;
  top: 93px;
  width: 400Px;
  border-bottom-right-radius: 5px;
  height: 700px;
  color: rgb(73, 68, 68);
  background-color: rgb(241, 235, 235);
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ease;
  animation-duration: 0.7s;
  z-index: 3;
}


.text-sobre {
  animation-name: slide;
  animation-duration: 3s;
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
</style>



