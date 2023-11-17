<script setup>
import { imoveis } from '@/_data/imoveis.js'
import AboutView from '../views/AboutView.vue'
</script>

<template>
    <dvi class="listagem-casa">
        <AboutView
        v-for="imovel in imoveis"
        v-bind:key="imovel.id"
        v-bind:imovel="imovel"
        />
    </dvi>
</template>