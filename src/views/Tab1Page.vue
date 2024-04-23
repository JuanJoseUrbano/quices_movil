<template>
  <ion-page>
    <HeaderGeneric id="header_guardar" color="success" defaultHref="home" value="Guardar" />
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title class="ion-text-center">
            <h2><span>Formulario</span></h2>
          </ion-card-title>
        </ion-card-header>

        <ion-card-content class="register-section">
          <ion-item>
            <InputGeneric v-model="nombres" id="nombre" type="text" label="Nombres" placeholder="Digite su nombre Completo" required />
          </ion-item>
          <ion-item>
            <InputGeneric v-model="fechaNacimiento"  id="fecha_nacimiento" type="date" placeholder="" label="Fecha de Nacimiento" required />
          </ion-item>
          <ion-item>
            <InputGeneric v-model="celular"  id="celular" type="number" label="Celular" placeholder="Digite su numero de celular" required />
          </ion-item>
          <ion-item>
            <InputGeneric v-model="correo" id="correo" type="email" label="Correo Electrónico" placeholder="usuario@ejemplo.com" required />
          </ion-item>
          <br>
          <ButtonGeneric id="guardar" value="Guardar" color="success" @Click="mostrarInformacion" />
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import InputGeneric from '@/components/InputGeneric.vue';
import ButtonGeneric from '@/components/ButtonGeneric.vue';
import HeaderGeneric from '@/components/HeaderGeneric.vue';

// Define variables and methods
let nombres = '';
let fechaNacimiento = '';
let celular = '';
let correo = '';

let mostrarInformacion = () => {
  if (nombres.trim() === '') {
                alert('Ingrese un nombre')
            } else if (fechaNacimiento.trim() === '') {
                alert('Ingrese una fecha de nacimiento')
            } else if (celular.trim() === '') {
                alert('Ingrese numero de celular',)
            } else if (correo.trim() === '') {
                alert('Ingrese su correo')
            }
            else {
              alert('Informacion:\n'+'Nombres: '+nombres+'\n'+'fecha de Nacimiento: '+fechaNacimiento+'\n'+'Celular: '+celular+'\n'+'Correo elecronico: '+correo+'\n')
            }
  
};
</script>


