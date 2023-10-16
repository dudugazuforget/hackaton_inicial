<script setup>
import { ref } from 'vue';
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue' 
import PhoneOutline from 'vue-material-design-icons/PhoneOutline.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
function goHome(){
    router.push('/home')
}
function goPerfil(){
  router.push('/perfil')
}



const mostrar_sb = ref(false);
const mostrar_ct = ref(false)


function toggleSobreNos() {
  mostrar_sb.value = !mostrar_sb.value;
  if (!mostrar_sb.value) {
    Voltar();
  }
}


function toggleContato() {
  mostrar_ct.value = !mostrar_ct.value;
  if (!mostrar_ct.value) {
    Voltar();
  }
}

function Voltar() {
  mostrar_sb.value = false;
  mostrar_ct.value = false;
}
</script>


<template>
  <div class="header">
    <h1 @click="goHome" class="name-title" >IfCoders</h1>
<div class="buttons">
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
    
      <button @click="toggleContato" class="contato">{{ mostrar_ct ? 'voltar' : 'Contato' }}</button>
      <div v-if="mostrar_ct" class="sobre">
        <p>Entre em contato conosco! Estamos aqui para ajudar. Use o numero abaixo ou nosso email de contato
          para falar conosco. Esperamos por sua mensagem! <br>
          <span style="color:rgb(34, 161, 34);"><PhoneOutline/>: (47)984975167 </span><br>
          <span style="color:rgb(34, 161, 34);"><EmailOutline/>: ifCoders@gmail.com</span>
        </p>
      </div>
    </div>
    
      <p class="perfil" @click="goPerfil">Perfil</p>

  </div>


</template>

<style scoped>
.perfil{
  display: flex;
  justify-items: center;
  cursor: pointer;
  margin-left: 155vh;
  margin-top: 1rem;
}
.buttons{
  display: flex;
  justify-content: center;
}

.contato {
  background-color: transparent;
  color: rgb(200, 221, 200);
  border: 0;
}


.sobre-nos {
  background-color: transparent;
  color: rgb(200, 221, 200);
  border: 0;
  margin-left: 20px;
}


.sobre {
  position: absolute;
  margin-left: 24px;
  padding: 20px;
  top: 50px;
  width: 400Px;
  border-bottom-right-radius: 5px;
  height: 100vh;
  color: rgb(73, 68, 68);
  background-color: rgb(241, 235, 235);
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ease;
  animation-duration: 0.7s;
  z-index: 3;
  border-bottom-right-radius:10px ;
  border-bottom-left-radius: 10px;
  
}


.text-sobre {
  animation-name: slide;
  animation-duration: 3s;
}

@keyframes slide {
  from {


    opacity: 0;
  }


  to {


    opacity: 1;
  }


}


@keyframes ease {
  from {


    width: 0px;
  }


  to {


    width: 400px;
  }
}


.name-title {
  color: rgb(34, 161, 34);
  margin: 0px 5px 5px 10px;
  max-width: 40%;
  cursor: pointer;
  transition: 0.5s;
}

.name-title:hover{
    color: rgba(70, 161, 34, 0.493);

}

.header {
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  border: 0;
  background-color: rgb(44, 40, 40);
  text-align: left;
  font-family: 'Poppins', sans-serif;
  color: rgb(200, 221, 200);
  font-weight: bold;
  top: 0px;
  z-index: 10;
  margin-left: -8px;
}

@media (max-width: 500px){
  .sobre{
    width: 300px;
    margin-left: -42px;
  }
}
</style>
