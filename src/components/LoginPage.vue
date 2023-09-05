<script setup>
import { ref } from 'vue';

const email = ref('')
const senha = ref('')
const confSenha = ref('')

const login = ref(true)
const redefinirSenha = ref(false)

function esqueceu(){
  
if(login.value === true && redefinirSenha.value === false ){
  login.value = false
  redefinirSenha.value =true
}
}

function redefinido(){
  login.value = true;
  redefinirSenha.value = false;
}

import { useRouter } from 'vue-router';
const router = useRouter()

function goLogin(){
router.push('/home')
}
</script>


<template>
  

    <form class="board-login" v-if="login">
      <h1 class="welcome">Bem-Vindo a Ifcoders</h1>
      <h4 class="enter-login">Por favor insira seu login</h4>
      <input type="email" placeholder="Email" v-model="email"> <br>
      <input type="password" name="password" placeholder="Senha" required  v-model="senha"><br>
      
      <button class="lp" @click="goLogin">Login</button>   
      
      
      <p class="esqueceu-senha" @click="esqueceu">redefinir senha</p>
      
      
    </form>
    
    <form class="redefinir-Senha" v-if="redefinirSenha" >

      <h1 class="welcome">Redefina sua Senha</h1>
      
      <input class="as" type="email" placeholder="Email" v-model="email"> <br>
      <input class="as" type="password" name="password" placeholder="Senha" required  v-model="senha"><br>
      <input class="as" type="password" name="password" placeholder="Confirmar senha" required  v-model="confSenha"><br>
      
    <button class="lp" type="submit" @click="redefinido">Redefinir </button>

  </form>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins%3Awght%40100%3B200%3B300%3B400&display=swap%27%29%3B');
.geral{
  width: 100%;
height: 100%  ;
  justify-content: center;
  align-items: center;
}
.enter-login{
  font-size: 12px;
}
.board-login {
  position: absolute;
  top: 30%;
  left: 35%;
  background-color: #e6e4e4;
  width: 500px;
  height: 370px;
  padding: 20px;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  font-weight: 600;
  font-family:'Poppins', sans-serif;

}

@media(max-width: 1400px){
  .board-login {
  position: absolute;
 top: 30%;
  left: 35%;
  background-color: #e6e4e4;
  width: 300px;
  height: 170px;
  padding: 20px;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  font-weight: 600;
  font-family:'Poppins', sans-serif;

}
}

.redefinir-Senha{
  position: absolute;
  top: 30%;
  left: 35%;
  background-color: #e6e4e4;
  width: 500px;
  height: 350px;
  padding: 20px;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  font-weight: 600;
  font-family:'Poppins', sans-serif;
}
@media(max-width: 1400px){
  .redefinir-Senha{
  position: absolute;
  top: 30%;
  left: 35%;
  background-color: #e6e4e4;
  width: 300px;
  height: 230px;
  padding: 20px;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  font-weight: 600;
  font-family:'Poppins', sans-serif;
}
}

.as {
  width: 300px;
  height: 50px;
  background-color: rgba(217, 217, 217, 0.66);
  border: 0;
  border-radius: 10px;
  margin-bottom: 5%;
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 2.200000047683716px 5px 5.400000095367432px 3px rgba(0, 0, 0, 0.40);
  font-family:'Poppins', sans-serif;
  font-size: medium;
}
@media(max-width: 1400px){
  .as {
  width: 220px;
  height: 35px;
  background-color: rgba(217, 217, 217, 0.66);
  border: 0;
  border-radius: 10px;
  margin-bottom: 5%;
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 2.200000047683716px 5px 5.400000095367432px 3px rgba(0, 0, 0, 0.40);
  font-family:'Poppins', sans-serif;
  font-size: medium;
}
}

.lp {
  width: 250px;
  height: 35px;
  border: 0;
  border-radius: 7px;
  background-color: #52bd37;
  color: #FFFFFF;
  font-family:'Poppins', sans-serif;
  cursor: pointer;
  border-radius: 11px;
  background: #52bd37;
  box-shadow: 3px 4px 4 px 0px rgba(0, 0, 0, 0.66);
}
@media(max-width: 1400px){
  .lp {
  width: 190px;
  height: 30px;
  border: 0;
  border-radius: 7px;
  background-color: #52bd37;
  color: #FFFFFF;
  font-family:'Poppins', sans-serif;
  cursor: pointer;
  border-radius: 11px;
  background: #52bd37;
  box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.66);
  margin-top: 7px;
}
}
.esqueceu-senha{
  color: #449231;
  font-family:'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin-top: 29px;
  
}
@media(max-width: 1400px){
  .esqueceu-senha{
  color: #449231;
  font-family:'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin-top: 7px;
  
}
}
.welcome {
  color: #52bd37;
  font-family:'Poppins', sans-serif;
  font-weight: 600;
}
@media(max-width: 1400px){
  .welcome {
  color: #52bd37;
  font-family:'Poppins', sans-serif;
  font-weight: 600;
  font-size: 15px;
  margin-top: -5px;
}
}
</style>
