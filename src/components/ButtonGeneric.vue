<template>
    <ion-button :id="id" :color="color" :href="href" expand="block">{{ value }}</ion-button>
  </template>
  
  
  <script lang="ts">
  import { IonButton } from '@ionic/vue';
import { expand } from 'ionicons/icons';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
  components: { IonButton },
  props: {
    id: String,
    value: String,
    color: String,
    href: String,
    expand:String
  }
});
  </script>
  