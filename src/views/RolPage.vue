<template>
    <IonPage>
        <HeaderGeneric id="header_guardar_rol" color="success" value="Guardar Rol" />
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title class="ion-text-center">
                        <h2><span>Formulario Rol</span></h2>
                    </ion-card-title>
                </ion-card-header>
                <ion-card-content class="register-section">

                    <FormularioGeneric />
                </ion-card-content>
            </ion-card></ion-content>
    </IonPage>

</template>
<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import FormularioGeneric from '@/components/FormularioGeneric.vue';
import HeaderGeneric from '@/components/HeaderGeneric.vue';

let ruta = ''
</script>