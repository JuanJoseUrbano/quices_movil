<template>
  <ion-header>
    <ion-toolbar :color="color">
      <ion-title>{{value}} Categoria</ion-title>
      <ion-buttons slot="start">
        <ion-back-button :defaultHref="defaultHref"></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>


<script>
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: String,
    value: String,
    color: String,
    defaultHref: String
  }
})
</script>