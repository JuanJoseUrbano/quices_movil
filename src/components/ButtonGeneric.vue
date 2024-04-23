<template>
    <ion-button :id="id" :color="color" >{{ value }}</ion-button>
  </template>
  
  
  <script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
  components: { IonButton },
  props: {
    id: String,
    value: String,
    color: String,
    href: String
  }
});
  </script>
  