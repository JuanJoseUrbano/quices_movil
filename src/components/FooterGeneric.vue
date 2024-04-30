<template>
    <ion-footer>
        <ion-toolbar :id="id" :class="texto" :color="color" >
            <p>Términos y condiciones</p>
            <p>Neiva, Copyright © 2023</p>
            <span>Contacto del desarrollador: urbanoperdomojgmail.com</span>
        </ion-toolbar>
    </ion-footer>
</template>

<script>

import { IonToolbar,IonFooter } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: String,
    texto: String,
    color: String,
  }
})
</script>