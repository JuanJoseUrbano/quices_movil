<template>
  <ion-page>
    <HeaderGeneric id="header_guardar" color="success" value="Guardar" />
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title class="ion-text-center">
            <h2><span>Formulario Categoria</span></h2>
          </ion-card-title>
        </ion-card-header>

        <ion-card-content class="register-section">
          <ion-item>
            <InputGeneric v-model="nombre" id="nombre" type="text" label="Nombre"
              placeholder="Digite el nombre de la categoria..." required />
          </ion-item>
          <ion-item>
            <InputGeneric v-model="descripcion" id="descripcion" type="text" label="Descripción"
              placeholder="Digite la descripcion..." required />
          </ion-item>
          <br>
          <ButtonGeneric id="guardar" value="Agregar" color="success" @Click="guardarCategoria()" />
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import InputGeneric from '@/components/InputGeneric.vue';
import HeaderGeneric from '@/components/HeaderGeneric.vue';
import ButtonGeneric from '@/components/ButtonGeneric.vue';
import { enviarSolicitud } from '../funciones.js';

// Define variables and methods
let nombre = '';
let descripcion = '';
let url = 'http://localhost:8081/Backend_televigilancia/televigilancia/categorias/'
const guardarCategoria = () => {
  if (nombre.trim() === '') {
    return alert('Ingrese un nombre')
  } else if (descripcion.trim() === '') {
    return alert('Ingrese una descripcion')
  }
  else {
    let parametros = {
      nombre: nombre.trim(),
      descripcion: descripcion.trim()
    }
    enviarSolicitud('POST', parametros, url + 'save', 'Categoria registrado con éxito!!!')
    window.location.href = "/listaCategorias"
  }
}
</script>
