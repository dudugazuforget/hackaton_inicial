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
            <h2>Agendar visita</h2>
            <input type="text" required placeholder="Nome" name="Nome" id="Nome" v-model="nome">
            <input type="email" required placeholder="Email" name="email" id="email" v-model="email">
            <input type="datetime-local" required name="" id="" v-model="dataHora">
            <button type="submit" @click="confirmaVisita">Agendar</button>
            <form action=" "></form>
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
.agendado {
    width: 400px;
    height: 400px;
    background-color: rgb(44, 40, 40);
    color: rgba(84, 129, 84, 0.623);
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 5px 4px rgba(84, 129, 84, 0.623);
    border-radius: 5px;
    font-family: Poppins;
}

.visita {
    width: 400px;
    height: 700px;
    background-color: rgb(44, 40, 40);
    color: rgba(84, 129, 84, 0.623);
    text-align: center;
    justify-content: center;
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 5px 4px rgba(84, 129, 84, 0.623);
    border-radius: 5px;
    font-family: Poppins;


}

.visita input {
    width: 200px;
    height: 40px;
    margin: 1rem;
    border: 0;
    font-size: medium;
    border-radius: 5px;
}

.visita button {
    width: 200px;
    height: 40px;
    margin: 1rem;
    border: 0;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 5px;
}

.visita button:hover {
    background-color: rgba(179, 187, 180, 0.575);
    box-shadow: 0px 2px rgba(34, 161, 34, 0.623)
}

.background-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10vh;
    height: 100vh;
    width: 100%;

}
</style>