<script setup>
import { ref } from 'vue';
import { perfil } from '../_data/login';
import { useRouter } from 'vue-router';

const username = ref(perfil.username);
const senha = ref(perfil.senha);
const cidade = ref(perfil.cidade);
const confSenha = ref('');

const login = ref(true);
const redefinirSenha = ref(false);

const email = ref('');


function esqueceu() {
  if (login.value === true && redefinirSenha.value === false) {
    login.value = false;
    redefinirSenha.value = true;
  }
}

function redefinido() {
  login.value = true;
  redefinirSenha.value = false;
}

const router = useRouter()
function goHome(){
    router.push('/home')
}
</script>
<template>
  <div class="login-container">
    <div class="login-form" v-if="login">
      <h1 class="welcome-title">Bem-Vindo à IfCoders</h1>
      <h4>Por favor, insira seu login</h4>
      <input type="text" placeholder="Username" v-model="username" class="input-field">
      <input type="text" placeholder="Cidade" v-model="cidade" class="input-field">
      <input type="password" placeholder="Senha" v-model="senha" class="input-field">
      <button @click="goHome" class="login-button">Login</button>
      <p class="forgot-password" @click="esqueceu">Esqueceu a senha?</p>
    </div>

    <form class="reset-password-form" v-if="redefinirSenha">
      <h1 class="welcome-title">Redefina sua Senha</h1>
      <input type="email" placeholder="Email" v-model="email" class="input-field">
      <input type="password" placeholder="Nova Senha" required v-model="senha" class="input-field">
      <input type="password" placeholder="Confirmar Senha" required v-model="confSenha" class="input-field">
      <button type="submit" @click="redefinido" class="reset-password-button">Redefinir</button>
    </form>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login-form, .reset-password-form {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 20px;
  max-width: 500px;
  width: 80%;
}

.welcome-title {
  color: #52bd37;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.input-field {
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
}

.login-button, .reset-password-button {
  width: 100%;
  height: 50px;
  background-color: #52bd37;
  color: #fff;
  border: 0;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.login-button:hover, .reset-password-button:hover {
  background-color: #449231;
  transform: scale(1.05);
}

.forgot-password {
  color: #449231;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
}

@media (max-width: 500px) {
  .login-form, .reset-password-form {
    width: 95%;
  }
}
</style>
