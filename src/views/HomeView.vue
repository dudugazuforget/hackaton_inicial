<script setup>
import NavBar from '../components/NavBar.vue';
import { ref, computed } from 'vue';
import { imoveis } from '@/_data/imoveis.js';
import { useRouter } from 'vue-router';

const filtroTipo = ref(0); 
const filtroEstado = ref('');
const filtroValor = ref(0);

const router = useRouter();

function goAlugar(imovel) {
  router.push({
    name: 'alugar',
    params: {
      id: imovel.id
    },
    props: {
      imovel
    }
  });
}


const imoveisFiltrados = computed(() => {
  return imoveis.filter((imovel) => {
    if (filtroTipo.value !== 0 && imovel.tipo !== filtroTipo.value) {
      return false;
    }
    if (filtroEstado.value !== '' && imovel.estado !== filtroEstado.value) {
      return false;
    }
    if (filtroValor.value > 0 && imovel.valor < filtroValor.value) {
      return false;
    }
    else{
     console.log( "França Lindo")
      return true;
    }
  });
});

</script>

<template>
  <div class="page">
    <NavBar />
    <div class="filter-form">
      <select class="form-select" v-model="filtroTipo">
        <option value="0">Selecione o Tipo de Imóvel</option>
        <option value="Apartamento">Apartamento</option>
        <option value="Casa">Casa</option>
        <option value="Chacara">Chácara</option>
      </select>

      <select class="form-estado" v-model="filtroEstado">
        <option value="">Selecione Seu Estado</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="DF">Distrito Federal</option>
        <option value="GO">Goiás</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="TO">Tocantins</option>
        <option value="FF">Forfra</option>
      </select>

      <input type="number" class="valor-input" v-model="filtroValor" placeholder="Valor Desejado">
    </div>

    <div class="imoveis-list">
      <div v-for="imovel in imoveisFiltrados" :key="imovel.id" class="imovel-card">
        <img :src="imovel.img" alt="Imóvel" class="imovel-image">
        <hr>
        <div class="imovel-details">
          <p class="imovel-valor">R${{ imovel.valor.toFixed(3) }}</p>
          <p><strong class="imovel-local">{{ imovel.local }}</strong></p>
          <p class="imovel-quartos">{{ imovel.QtdQua }} Quartos</p>
          <p class="imovel-quartos">{{ imovel.QtdBanh }} Banheiros</p>
        </div>
        <button class="b-alugar" @click="goAlugar(imovel)">Alugar</button>
      </div>
    </div>

    <footer class="fixed-footer">
      <div>
        <span style="color: black;"><AlphaCCircleOutline /></span>
        IfCoders
      </div>
      <p>Desenvolvimento</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter-form {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 60px 30px;
  text-align: center;
}

.form-select, .form-estado {
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid rgba(128, 128, 128, 0.295);
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  width: 200px;
}

.valor-input {
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid rgba(128, 128, 128, 0.295);
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  width: 150px;
}






.imoveis-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  height: auto;
  margin-bottom: 70px;
  justify-content: center;
}

.imovel-card {
  background-color: #fff;
  border: 1px solid rgba(128, 128, 128, 0.295);
  border-radius: 10px;
  width: 400px;
  height: 410px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.imovel-image {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  max-height: 50%;
}

.imovel-details {
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.imovel-valor {
  font-size: 20px;
  color: #2A823D;
  font-weight: bold;
}

.imovel-local {
  font-size: 18px;
  font-weight: bold;
}

.imovel-quartos {
  font-size: 16px;
  color: #333;
}

.b-alugar {
  background-color: #2A823D;
  color: white;
  font-family: 'Poppins', sans-serif;
  border: 0;
  border-radius: 7px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.b-alugar:hover {
  background-color: #2e7a3f;
}

.fixed-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-top: 1px solid rgba(128, 128, 128, 0.295);
}

.fixed-footer span {
  font-size: 24px;
  color: #2A823D;
  margin-right: 5px;
}

.fixed-footer p {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: #333;
  margin: 0;
}


@media (max-width: 768px) {
  .filter-form {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 50px 10px ;
  }

  .form-select, .form-estado, .valor-input {
    width: 100%;
    margin: 10px 0;
  }

  .imovel-card {
    width: 100%;
    margin: 10px 0;
  }

  .fixed-footer {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }

  .fixed-footer span {
    margin: 0;
  }
} 
</style>
