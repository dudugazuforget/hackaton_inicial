<script setup>
import {  computed } from 'vue';
import { getImovelById } from '../_data/imoveis';
import NavBar from '../components/NavBar.vue';


const props = defineProps(['id'])

const imovel = computed(() => getImovelById(props.id))



import { useRouter } from 'vue-router';
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
     <NavBar/>
   
    <div class="body">
    <div class="img">
        <img :src="imovel?.img">
    </div>
    <div class="termo">
        <p>O usuário do imóvel, após o uso do mesmo, é responsável <br>
            por manter o espaço limpo e higienizado, assegurando que o ambiente <br>
            seja mantido em condições adequadas de higiene e ordem durante sua <br>
            ocupação. Ao entregar o imóvel, o usuário deve garantir que ele esteja <br>
            nas mesmas condições em que foi inicialmente recebido, cumprindo <br>
            assim com a responsabilidade de preservar a limpeza e organização <br>
            do espaço. Isso implica em cuidar da limpeza regular, evitando danos <br>
            desnecessários e tomando precauções para manter a integridade do <br>
            imóvel, a fim de garantir uma transição tranquila e agradável para o <br>
            próximo usuário. </p>
    </div>
</div>
<hr>
<div class="compra">
    <div class="info">
        <h1>R${{ imovel?.valor.toFixed(3) }}</h1>
    </div>  
    <div class="info">
        <p>{{imovel?.local}} </p>
    </div>
    <div class="info">
        <p><strong>Tipo do imovel: </strong>{{imovel?.tipo}} </p>
    </div>
    <div class="info">
        <p>{{imovel?.estado}} </p>
    </div>
    <input class="ckbx-term" type="checkbox" name="a" id="a">
    <label class="txt-ckbx" for=""> <strong> Aceito os termos acima</strong></label>
    <div class="aluga">
        <button  class="botao-alugar" @click="goAlugado">Agendar Visita</button>
    </div>
</div>
</template>

<style>

.aluga{
 display: flex;
 margin: 0 auto;
}
.compra{
    display: flex;
    width: 42%;
    flex-wrap: wrap;
    margin: 0 auto;
}
*{
    margin: 0;
    
}
.body{
    display: flex;
    margin-top: 54px;
}
    

.ckbx-term {
    width: 20px;
}

.botao-alugar {
    border: 0;
    height: 60px;
    width: 250px;
    background-color: #2A823D;
    font-family: 'Poppins';
    color: aliceblue;
    font-size: 24px;
    border-radius: 10px;
    transition: 0.5s;   
}

.botao-alugar:hover {
    background-color: #2e7a3f;
    transform: scale(1.1);
    transition: all 0.5s;
}

.termo {
    font-family: 'Poppins';
    font-size: 22px;
    width: 80%;
    padding: 30px 0px 0px 20px;
}

.localidadeTwo {
    font-family: 'Poppins';
    font-size: 23px;
}

.localidade {
    font-family: 'Poppins';
    bottom: 130px;
    font-size: 23px;
}

.valor {
    font-weight: 400;
    color: #2A823D;
}
.info{
    margin: 0 20px;
    display: flex;
    align-items: center;

}
label{
    display: flex;
    align-items: center;
    margin-left: 5px;
}
@media (max-width: 1000px){
    .body{
        flex-wrap: wrap;
        width: 500px;
    }
}
@media (max-width: 500px){
    .body{
        width: 100%;
    }
    img{
        width: 100%;
    }
}
</style>