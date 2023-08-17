<template>
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
    <button class="botao-alugar">Alugar</button>
</template>

<style>
.txt-ckbx{
    position: absolute;
    bottom: 40%;
    right: 42%;
}
.ckbx-term{
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

    
}

.botao-alugar:hover{
    background-color: #2e7a3f;
    transform: scale(1.1);
  transition: all 1ms;
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
