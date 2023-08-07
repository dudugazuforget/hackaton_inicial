<script setup>
import { imoveis } from '@/_data/imoveis.js';
import { ref } from 'vue';


const mostrar_sb = ref(false);
const mostrar_ct = ref(false)
const form_invisible = ref(true)
const b_invisibleS = ref(true)
const b_invisibleC = ref(true)


function toggleSobreNos() {
  mostrar_sb.value = !mostrar_sb.value;
  form_invisible.value = false;
  b_invisibleC.value = false;
  if (!mostrar_sb.value) {
    Voltar();
  }
}


function toggleContato() {
  mostrar_ct.value = !mostrar_ct.value;
  form_invisible.value = false;
  b_invisibleS.value = false
  if (!mostrar_ct.value) {
    Voltar();
  }
}

function Voltar() {
  mostrar_sb.value = false;
  mostrar_ct.value = false
  form_invisible.value = true;
  b_invisibleS.value = true;
  b_invisibleC.value = true;

}

</script>


<template>
  <div class="title">
    <h1 class="name-title">IfCoders</h1>

    <div>
      <button @click="toggleSobreNos" class="sobre-nos" v-if="b_invisibleS">{{ mostrar_sb ? 'Voltar' : 'Sobre nós'
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
      <button @click="toggleContato" class="contato" v-if="b_invisibleC">{{ mostrar_ct ? 'voltar' : 'contato' }}</button>
      <div v-if="mostrar_ct" class="sobre">
        <p>Entre em contato conosco! Estamos aqui para ajudar. Use o numero abaixo ou nosso email de contato
          para falar conosco. Esperamos por sua mensagem! <br>
          <span style="color:rgb(34, 161, 34);">tel: (47)984975167 </span><br>
          <span style="color:rgb(34, 161, 34);">email: ifCoders@gmail.com</span>
        </p>
      </div>
    </div>



  </div>

  <select class="form-select" v-if="form_invisible">
    <option value="0">Selecione o Tipo de imovel</option>
    <option value="1">Apartamento</option>
    <option value="2">Casa</option>
    <option value="3">Chacara</option>
  </select>

  <div class="form-floating" v-if="form_invisible">
    <select class="form-select" placeholder="Selecione Seu Estado">
      <option value="">Selecione Seu Estado</option>
      <option value="AC">Acre</option>
      <option value="AL">Alagoas</option>
      <option value="AP">Amapá</option>
      <option value="AM">Amazonas</option>
      <option value="BA">Bahia</option>
      <option value="CE">Ceará</option>
      <option value="DF">Distrito Federal</option>
      <option value="ES">Espirito Santo</option>
      <option value="GO">Goiás</option>
      <option value="MA">Maranhão</option>
      <option value="MS">Mato Grosso do Sul</option>
      <option value="MT">Mato Grosso</option>
      <option value="MG">Minas Gerais</option>
      <option value="PA">Pará</option>
      <option value="PB">Paraíba</option>
      <option value="PR">Paraná</option>
      <option value="PE">Pernambuco</option>
      <option value="PI">Piauí</option>
      <option value="RJ">Rio de Janeiro</option>
      <option value="RN">Rio Grande do Norte</option>
      <option value="RS">Rio Grande do Sul</option>
      <option value="RO">Rondônia</option>
      <option value="RR">Roraima</option>
      <option value="SC">Santa Catarina</option>
      <option value="SP">São Paulo</option>
      <option value="SE">Sergipe</option>
      <option value="TO">Tocantins</option>
    </select>

  </div>

  <input v-if="form_invisible" type="number" class="pessoas-input" placeholder="Quantidade de pessoas">
  <button @click="run_filter" class="b-filtrar">Filtrar</button>

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

.pessoas-input {

  position: relative;
  text-align: center;
  top: -60px;
  left: 680px;
  width: 400px;
  height: 70px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid rgba(128, 128, 128, 0.295);
  border-radius: 5px;
}

.form-select {
  position: relative;
  top: 120px;
  left: 370px;
  width: 270px;
  height: 70px;
  margin-bottom: 20px;
  padding: 10px;
}

.listagem-imoveis {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 35px;
  margin-top: -150px;
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


.sobre {
  position: absolute;
  padding: 20px;
  top: 95px;
  width: 700px;
  border-bottom-right-radius: 5px;
  height: 280px;
  color: rgb(73, 68, 68);
  background-color: rgb(241, 235, 235);
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ease;
  animation-duration: 0.7s;
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


    width: 700px;
  }
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


}

.b-filtrar {
  position: relative;
  top: 30px;
  left: 279px;
  width: 270px;
  height: 70px;
  padding: 10px;
  background-color: rgb(32, 133, 32);
  color: white;
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;
  border: 0;
}
</style>



