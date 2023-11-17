<script setup>
import { ref } from 'vue';
import CheckboxMarkedCircleOutline from 'vue-material-design-icons/CheckboxMarkedCircleOutline.vue';
import { getImovelById } from '../_data/imoveis';
import { computed } from 'vue';
import NavBar from '../components/NavBar.vue';
import emailjs from 'emailjs-com';

const props = defineProps(['id'])

const imovel = computed(() => getImovelById(props.id))

const visita = ref(true);
const visitaAgendada = ref(false);
const email = ref('');
const nome = ref('');
const dataHora = ref('');



function confirmaVisita() {
    visita.value = false;
    visitaAgendada.value = true;

    if (email.value && nome.value && dataHora.value) {
        const serviceID = 'service_7m5b0j5';
        const templateID = 'template_kke5rol';
        const userID = 'hvIokEjEa46sZcQrm';

        emailjs.send(serviceID, templateID, {
            to_email: email.value,
            to_name: nome.value,
            appointment_datetime: dataHora.value
        }, userID)
        .then(function(response) {
            console.log('E-mail enviado com sucesso:', response);
        }, function(error) {
            alert('Erro ao enviar e-mail:', error);
        });
    } else {
        alert('Preencha todos os campos antes de agendar a visita.');
        visita.value = true;
    visitaAgendada.value = false;
    }
}

</script>
<template>
    <NavBar />
  
    <div class="background-card">
      <div class="visita" v-if="visita">
        <h2>Agendar Visita</h2>
        <input type="text" required placeholder="Nome" name="Nome" id="Nome" v-model="nome" />
        <input type="email" required placeholder="Email" name="email" id="email" v-model="email" />
        <input type="datetime-local" required v-model="dataHora" />
        <button type="submit" @click="confirmaVisita">Agendar</button>
        <form action=""></form>
      </div>
      <div class="ifo-imovel" v-if="visita">
        <h2>Informações do Imóvel Escolhido</h2>
        <h3>Valor do Imóvel: R${{ imovel.valor.toFixed(3) }}</h3>
        <h3>Localidade do Imóvel: {{ imovel.local }}.</h3>
        <h3>Tipo de Imóvel: {{ imovel.tipo }}.</h3>
        <h3>Quantidade de Banheiros: {{ imovel.QtdBanh }}.</h3>
        <h3>Quantidade de Quartos: {{ imovel.QtdQua }}.</h3>
      </div>
      <div class="agendado" v-if="visitaAgendada">
        <h1>Visita Agendada</h1>
        <h3>{{ nome }}</h3>
        <h3>Acesse seu email para mais informações</h3>
        <CheckboxMarkedCircleOutline />
      </div>
    </div>
  </template>
  
  <style scoped>
    .background-card {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 5vh;
      min-height: 100vh;
      background-color: #f0f0f0; 
      padding: 20px; 
    }
  
    .visita,.ifo-imovel,.agendado {
      background-color: #fff; 
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
      padding: 20px; 
      border-radius: 10px; 
      font-family: 'Poppins', sans-serif;
      max-width: 500px; 
      width: 100%; 
    }
  
    .visita input,
    .visita button {
      width: 100%;
      height: 40px;
      margin: 10px 0;
      padding: 10px; 
      border: 1px solid #ccc; 
      border-radius: 5px;
    }
  
    .visita button {
      background-color: #52bd37;    
      color: #fff;
      cursor: pointer;
      transition: background-color 0.5s;
    }
  
    .visita button:hover {
      background-color: #449231; 
    }
  
    .ifo-imovel {
      background-color: #f0f0f0; 
    }

    @media (max-width: 768px) {
  .background-card {
    padding: 10px;
  }

  .visita, .ifo-imovel, .agendado {
    max-width: 100%;
  }
}
  </style>
  