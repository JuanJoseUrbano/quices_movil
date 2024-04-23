<template>
  <ion-page>
    <HeaderGeneric id="header_actualizar" color="warning" defaultHref="home" value="Actualizar"/>
    <ion-content><ion-card>
        <ion-card-header>
          <ion-card-title class="ion-text-center"><h2><span>Actualizacion de datos</span></h2></ion-card-title>
        </ion-card-header>

        <ion-card-content class="register-section">
          <ion-item>
            <InputGeneric id="nombre" type="text" label="Nombres" placeholder="Digite su nombre Completo" />
          </ion-item>
          <ion-item>
            <InputGeneric id="fecha_nacimiento" type="date" placeholder="" label="Fecha de Nacimiento" />
          </ion-item>
          <ion-item>
            <InputGeneric id="celular" type="number" label="Celular" placeholder="Digite su numero de celular" />
          </ion-item>
          <ion-item>
            <InputGeneric id="correo" type="email" label="Correo Electrónico" placeholder="usuario@ejemplo.com" />
          </ion-item>
          <br>
          <ButtonGeneric id="actualizar" value="Actualizar" color="warning" />
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage} from '@ionic/vue';
import ButtonGeneric from '@/components/ButtonGeneric.vue';
import InputGeneric from '@/components/InputGeneric.vue';
import HeaderGeneric from '@/components/HeaderGeneric.vue'
</script>
