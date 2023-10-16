<script setup>
import AlphaCCircleOutline from 'vue-material-design-icons/AlphaCCircleOutline.vue'
import { imoveis } from '@/_data/imoveis.js';
import NavBar from '../components/NavBar.vue';



function filtrar() {


}
import { useRouter } from 'vue-router';
const router = useRouter()

function goAlugar(imovel){
router.push({
  name: 'alugar',
  params: {
    id: imovel.id
  },
  props: {
    imovel
  }
})
}

</script>


<template>
<NavBar/>

  
    <div class="form-floating">
  <select class="form-select">
    <option value="0">Selecione o Tipo de imovel</option>
    <option value="1">Apartamento</option>
    <option value="2">Casa</option>
    <option value="3">Chacara</option>
  </select>

  
    <select class="form-estado" placeholder="Selecione Seu Estado">
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
      <option value="FF">Forfra</option>
    </select>

  

  <input type="number" class="pessoas-input" placeholder="Quartos desejados">
  <button @click="run_filter" class="b-filtrar">Filtrar</button>
</div>

  <div class="listagem-imoveis">
    <div v-for="imovel in imoveis" :key="imovel.id" class="card-casa">
      <img :src="imovel.img" alt="capa" class="imovel-capa">
      <hr>
      <span><button class="b-alugar" @click="goAlugar(imovel)">Alugar</button></span>
      <div class="sub-card">
      <p class="imovel-valor">R${{ imovel.valor.toFixed(3) }}</p>
      <strong><p class="imovel-local">{{ imovel.local }}</p></strong>
      <p class="imovel-quartos"> {{ imovel.QtdQua }} Quartos</p>
      <p class="imovel-quartos"> {{ imovel.QtdBanh }} Banheiros</p>
    </div>

    </div>
    <footer class="fixed-baseboard">
      <p>
        <span style="color: black;"><AlphaCCircleOutline/></span> 
        IfCoders 
        <p>
          Desenvolvimento
        </p>
      </p>
    </footer>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins%3Awght%40100%3B200%3B300%3B400&display=swap%27%29%3B');


.sub-card{
  display: flex;
  flex-direction: column;
flex-wrap: wrap;
}
.form-floating{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  height: 80px;
  margin: 60px 30px;
  text-align: center;
}
.pessoas-input {
  text-align: center;
  border: 1px solid rgba(128, 128, 128, 0.295);
  border-radius: 5px;
}

.form-select {
  border-radius: 5px;
  background-color: transparent;
  border-color:  rgba(128, 128, 128, 0.295);
}

.form-estado{
  background-color: transparent;
  border: 1px solid rgba(128, 128, 128, 0.295);
  border-radius: 5px;
}

.b-filtrar {
  background-color: rgb(32, 133, 32);
  color: white;
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;
  border: 0;
}


.listagem-imoveis { 
  display: flex;
  flex-wrap: wrap;  
  gap: 1rem;
  width: 100%;
  margin: 0;
  justify-content: center;
}


.card-casa {
  background-color: transparent;
  border: 1px solid rgba(128, 128, 128, 0.295);
  border-radius: 10px;
  width: 400px;
  height: 410px;
  margin: 20px;
}

.imovel-capa {
  position: sticky;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
}


.imovel-local {
  margin-top: -60px;
  margin-bottom: 50px;
  margin-left: 5px;
  color: rgb(15, 9, 4);
  font-family: 'Poppins', sans-serif;
}

.imovel-quartos{
    margin-top: -50px;
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
  border-radius: 7px;
  height: 25px;
  width: 95px;
  left: 250px;
  transition: .1s;
}
.b-alugar:hover{
  background-color: rgb(12, 65, 12);
  transform: scale(1.1);
 }


.imovel-valor {
    color: rgb(43, 73, 13);
  margin-top: -30px;
  margin-bottom: 60px;
  margin-left: 7px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}


.fixed-baseboard {
  position: relative;
  width: 100%;
  height: 70px;
  right: 1px;
  color: rgb(32, 133, 32);
  bottom: 0px;
  display: flex;
}
@media (max-width: 500px){
  .card-casa{
    margin: 0;
  }
  .form-floating{
    grid-template-columns: 1fr 1fr;
  }

}
</style>