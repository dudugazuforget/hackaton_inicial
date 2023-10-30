<script setup>
import {  computed } from 'vue';
import { getImovelById } from '../_data/imoveis';
import NavBar from '../components/NavBar.vue';
import { useRouter } from 'vue-router';


const props = defineProps(['id'])

const imovel = computed(() => getImovelById(props.id))



const router = useRouter()

function goAlugado(imovel){
    
    
    
    router.push({
  name: 'alugado',
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
    <div class="page">
      <NavBar />
      <div class="content">
        <div class="image-container">
          <img :src="imovel?.img" alt="Imóvel">
        </div>
        <div class="info-container">
          <div class="terms">
            <h2>Termos de Uso</h2>
            <p>
              O usuário do imóvel, após o uso do mesmo, é responsável por manter o espaço limpo e higienizado, assegurando que o ambiente seja mantido em condições adequadas de higiene e ordem durante sua ocupação. Ao entregar o imóvel, o usuário deve garantir que ele esteja nas mesmas condições em que foi inicialmente recebido, cumprindo assim com a responsabilidade de preservar a limpeza e organização do espaço. Isso implica em cuidar da limpeza regular, evitando danos desnecessários e tomando precauções para manter a integridade do imóvel, a fim de garantir uma transição tranquila e agradável para o próximo usuário.
            </p>
          </div>
          <div class="info-imovel">
            <h2>Detalhes do Imóvel</h2>
            <p><strong>Valor do Imóvel:</strong> R${{ imovel?.valor.toFixed(3) }}</p>
            <p><strong>Localidade do Imóvel:</strong> {{ imovel?.local }}</p>
            <p><strong>Tipo do Imóvel:</strong> {{ imovel?.tipo }}</p>
            <p><strong>Estado:</strong> {{ imovel?.estado }}</p>
          </div>
          <div class="aceitar-term">
            <input type="checkbox" id="aceitar-term" class="checkbox">
            <label for="aceitar-term"><strong> Aceito os termos acima</strong></label>
          </div>
          <div class="Acao-button">
            <button class="btn-alugar" @click="goAlugado">Agendar Visita</button>
          </div>
        </div>
      </div>
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
  
  .content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  
  .image-container {
    flex: 1;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .info-container {
    flex: 1;
    max-width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .terms p {
    font-size: 16px;
    color: #555;
    line-height: 1.5;
  }
  
  .info-imovel p {
    font-size: 18px;
    color: #333;
    margin: 10px 0;
  }
  
  .checkbox {
    margin-right: 10px;
  }
  
  .aceitar-term label {
    font-size: 16px;
  }
  
  .btn-alugar {
    background-color: #2A823D;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-alugar:hover {
    background-color: #2e7a3f;
  }
  
  @media (max-width: 768px) {

    
  .content {
    flex-direction: column;
    padding: 10px;
  }

  .image-container {
    max-width: 100%;
  }

  img {
    max-width: 100%;
  }

  .info-container {
    max-width: 100%;
    padding: 10px;
  }

  .info-imovel p {
    font-size: 16px;
  }

  .btn-alugar {
    font-size: 18px;
  }
}
  </style>
  