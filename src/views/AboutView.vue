<script setup>
import { ref } from 'vue';

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

import { useRouter } from 'vue-router';
const router = useRouter()
function goHome() {
    router.push('/home')
}
function goAlugado() {
    router.push('/alugado')
}
</script>
<template>
    <div class="title">
        <h1 @click="goHome" class="name-titleL">IfCoders</h1>
    </div>

    <div class="img">
        <img src="https://i.pinimg.com/564x/f5/47/99/f54799e42148e400a5d2b448a40a6a6e.jpg  ">
    </div>
    <div class="linha">
    </div>

    <div class="valor">
        <h1>R$450.00</h1>
    </div>

    <div class="localidade">
        <p>Joinville/SC</p>
    </div>
    <div class="localidadeTwo">
        <p>Rua:Manoel Ribas</p>
    </div>
    <div class="termos">
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
    <input class="ckbx-term" type="checkbox" name="a" id="a">
    <label class="txt-ckbx" for="">Aceito os termos acima</label>
    <button  class="botao-alugar" @click="goAlugado">Alugar</button>
</template>

<style>
.name-titleL {
    margin-top: 20px;
    margin-left: 20px;
    color: rgb(34, 161, 34);
    cursor: pointer;
    transition: 0.5s;
}

.name-titleL:hover {
    font-size: 45px;

}


.title {
    position: fixed;
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
    z-index: 3;
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
    top: 93px;
    width: 400Px;
    border-bottom-right-radius: 5px;
    height: 700px;
    color: rgb(73, 68, 68);
    background-color: rgb(241, 235, 235);
    display: flex;
    align-items: center;
    justify-content: center;
    animation-name: ease;
    animation-duration: 0.7s;
    z-index: 3;
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


        width: 400px;
    }
}


.imovel-capa {


    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;


}


.txt-ckbx {
    position: absolute;
    bottom: 40%;
    right: 42%;
}

.ckbx-term {
    position: absolute;
    bottom: 40%;
    right: 52%;
    height: 20px;
    width: 20px;
}

.botao-alugar {
    position: absolute;
    bottom: 200px;
    right: 500px;
    border: 0;
    height: 80px;
    width: 250px;
    background-color: #2A823D;
    font-family: 'Poppins';
    color: aliceblue;
    font-size: 24px;
    border-radius: 5px;
    transition: 0.5s;


}

.botao-alugar:hover {
    background-color: #2e7a3f;
    transform: scale(1.1);
    transition: all 0.5s;
}

.termos {
    position: absolute;
    font-family: 'Poppins';
    top: 200px;
    right: 200px;
    font-size: 22px;
}

.localidadeTwo {

    font-family: 'Poppins';
    position: absolute;
    bottom: 100px;
    left: 550px;
    font-size: 23px;
}

.localidade {

    font-family: 'Poppins';
    position: absolute;
    bottom: 130px;
    left: 600px;
    font-size: 23px;
}

.valor {
    position: absolute;
    font-weight: 400;
    color: #2A823D;
    bottom: 120px;
    left: 100px;
}

.img {
    position: absolute;
    top: 150px;
    left: 120px;
    width: 600px;
    height: 498px;
    
}

.linha {

    position: absolute;
    bottom: 190px;
    left: 90px;
    width: 645.005px;
    height: 1px;
    background-color: black;
}
</style>
