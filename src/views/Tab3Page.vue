<template>
  <ion-page>
    <HeaderGeneric id="header_lista" color="primary" defaultHref="home" value="Lista" />
    <ion-content class="ion-padding" color="light">
      <ion-card-header>
        <ion-card-title class="ion-text-center">Lista Estudiantes</ion-card-title>
      </ion-card-header>
      <ion-card-content class="register-section">
        <div class="form-container">
          <InputGeneric id="filtrar" type="text" placeholder="Buscar clientes" />
          <ButtonGeneric id="buscar" value="Buscar" color="primary" />
        </div>
        <ion-list :inset="true">
          <ion-item>
            <ion-label>Leonardo Nuñez Calderon</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Carlos Eduardo Cabrera Miranda</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Alvaro Felipe Avila Vidal</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Juan Jose Urbano Perdomo</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Nicolas Ruiz</ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import ButtonGeneric from '@/components/ButtonGeneric.vue';
import InputGeneric from '@/components/InputGeneric.vue';
import HeaderGeneric from '@/components/HeaderGeneric.vue'
</script>

<style>
.form-container {
  display: flex;
  /* Enable flexbox layout */
  align-items: center;
  /* Align items vertically in the row */
}
</style>