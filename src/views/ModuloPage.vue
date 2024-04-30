<template>
    <IonPage>
        <HeaderGeneric id="header_guardar" color="success" value="Guardar Modulo" />
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title class="ion-text-center">
                        <h2><span>Formulario Modulo</span></h2>
                    </ion-card-title>
                </ion-card-header>
                <ion-card-content class="register-section">
                    <FormularioGeneric />
                    <ion-item>
                        <InputGeneric v-model="ruta" id="descripcion" type="text" label="Ruta"
                            placeholder="Digite la ruta..." required />
                    </ion-item>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </IonPage>

</template>
<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import FormularioGeneric from '@/components/FormularioGeneric.vue';
import InputGeneric from '@/components/InputGeneric.vue';
import HeaderGeneric from '@/components/HeaderGeneric.vue';

components: {
    FormularioGeneric
}
let ruta = ''
</script>