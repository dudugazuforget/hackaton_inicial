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
    <h1 @click="goHome" class="name-title">IfCoders</h1>
    <div class="buttons">
      <button class="perfil" @click="goPerfil">Perfil</button>
      <button @click="toggleSobreNos" class="sobre-nos">{{ mostrar_sb ? 'Voltar' : 'Sobre nós' }}</button>
      <div v-if="mostrar_sb" class="info-box">
        <p class="info-text">
          Somos a <span class="highlight">IfCoders</span>, uma inovadora empresa de locação de imóveis fundada por dois jovens empreendedores programadores. Unimos tecnologia e expertise no mercado imobiliário para simplificar e aprimorar a experiência de locação. Nossa plataforma intuitiva e orientada por dados conecta proprietários e inquilinos de forma rápida e segura. Valorizamos o atendimento ao cliente e buscamos criar uma comunidade confiável e sustentável. Junte-se a nós nessa jornada rumo a uma locação de imóveis mais inteligente e gratificante. Bem-vindo à <span class="highlight">IfCoders</span>!
        </p>
      </div>
      <button @click="toggleContato" class="contato">{{ mostrar_ct ? 'Voltar' : 'Contato' }}</button>
      <div v-if="mostrar_ct" class="info-box">
        <p>Entre em contato conosco! Estamos aqui para ajudar. Use o número abaixo ou nosso email de contato para falar conosco. Esperamos por sua mensagem!<br>
          <span class="highlight"><PhoneOutline />: (47)984975167 </span><br>
          <span class="highlight"><EmailOutline />: ifCoders@gmail.com</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #2A823D;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  z-index: 10;
}

.name-title {
  font-size: 24px;
  cursor: pointer;
  transition: color 0.5s;
}

.name-title:hover {
  color: rgba(70, 161, 34, 0.8);
}

.buttons {
  display: flex;
  gap: 20px;
  align-items: center;
}

.perfil,.sobre-nos,.contato {
  background-color: transparent;
  color: white;
  border: 0;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

.sobre-nos:hover,.contato:hover {
  text-decoration: underline;
}

.info-box {
  position: absolute;
  margin-left: 24px;
  padding: 20px;
  top: 50px;
  right: 0;
  width: 400px;
  background-color: #f0f0f0;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ease 0.7s;
  z-index: 3;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.info-text {
  animation: slide 3s;
  opacity: 1;
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
    width: 0;
  }

  to {
    width: 400px;
  }
}

.highlight {
  color: #22a122;
}
</style>
