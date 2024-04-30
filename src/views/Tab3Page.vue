<template>
  <ion-page>
    <HeaderGeneric id="header_lista" color="primary" defaultHref="home" value="Datos Almacenados" />
    <ion-content class="ion-padding">
      <ion-card-header>
        <ion-card-title class="ion-text-center">
          <h2><strong>Listado de Categorias</strong></h2>
        </ion-card-title>
      </ion-card-header>
      <ion-card-content class="register-section">
        <div class="form-container">
          <InputGeneric id="filtrar" type="text" placeholder="BUSCAR CATEGORIAS..." v-model="filtro" />
          <ButtonGeneric id="buscar" value="Consultar" color="primary" @click="filtrarInformacion()" />
        </div>
        <ion-list :inset="true" v-if="datos.length > 0">
          <ion-item v-for="dato in datos" :key="dato.id">
            <ion-label>{{ dato.id }}</ion-label>
            <ion-label>{{ dato.nombre }}</ion-label>
            <ButtonGeneric id="eliminar" value="Eliminar" color="danger" @click="eliminarCategoria(dato.id)"/>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { enviarSolicitud } from '../funciones.js';
import ButtonGeneric from '@/components/ButtonGeneric.vue';
import InputGeneric from '@/components/InputGeneric.vue';
import HeaderGeneric from '@/components/HeaderGeneric.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue'; // Importa onMounted desde Vue

let datos = ref([]);
let url = 'http://localhost:8081/Backend_televigilancia/televigilancia/categorias/'
let filtro = '';

onMounted(() => {
  obtenerDatos();
});

const obtenerDatos = () => {
  axios.get(url+ 'get')
    .then((response) => {
      datos.value = response.data; 
      console.log(datos.value);
    })
    .catch((error) => {
      console.error("Estado de la petición: ", error);
    });
}

const filtrarInformacion = () => {
  axios.get(`http://localhost:8081/Backend_televigilancia/televigilancia/categorias/search?nombre=${filtro}`)
    .then((response) => {
      datos.value = response.data; 
      console.log(datos.value); 
    })
    .catch((error) => {
      console.error("Estado de la petición: ", error);
    });
}

const eliminarCategoria = (id) => {
  enviarSolicitud('DELETE', { id: id }, url +'delete/'+ id, 'Categoria eliminada')
}
</script>

<style>
.form-container {
  display: flex;
  align-items: center;
}
</style>
