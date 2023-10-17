<script setup>
import NavBar from '../components/NavBar.vue';
import { perfil } from '../_data/login';

</script>

<template>
  <NavBar />

  <div class="container">
    <div class="sub-container">
      <div class="profile-info">
        <h3>Username: {{ perfil.username }}</h3>
        <h3>Cidade: {{ perfil.cidade }}</h3>
        <h3>{{ perfil.senha }}</h3>
      </div>

      <div class="profile-options">
        <h2>Opções de perfil</h2>
        <div class="input-group">
          <label for="profile-image">Foto de Perfil</label>
          <input type="file" id="profile-image" accept="image/*">
        </div>
        <div class="input-group">
          <label for="profile-bio">Biografia</label>
          <textarea id="profile-bio" rows="4" v-model="perfil.biografia"></textarea>
        </div>
        <div class="input-group">
          <label for="rental-history">Histórico de Casas Alugadas</label>
          <textarea id="rental-history" rows="4" v-model="perfil.historico"></textarea>
        </div>
        <button class="save-button">Salvar Alterações</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sub-container {
  width: 80%;
  height: auto;
  background-color: #f3f4f6;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

h3 {
  font-size: 20px;
}

.profile-options {
  margin-top: 20px;
  width: 100%;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
}

label {
  font-size: 16px;
}

input[type="file"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.save-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-button:hover {
  background-color: #0056b3;
}

</style>
