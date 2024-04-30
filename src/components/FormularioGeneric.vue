<template>
          <ion-item>
            <InputGeneric v-model="codigo" id="codigo" type="text" label="Codigo"
              placeholder="Digite el codigo..." required />
          </ion-item>
          <ion-item>
            <InputGeneric v-model="nombre" id="nombre" type="text" label="Nombre" placeholder="Digite el nombre..." required />
          </ion-item>
          <ion-item>
            <InputGeneric v-model="descripcion" id="descripcion" type="text" label="Descripcion"
              placeholder="Digite la descripcion..." required />
          </ion-item>
          <ion-item>
            <InputGeneric v-model="estado" id="estado" type="text" label="Estado"
              placeholder="Activo o Inactivo" required />
          </ion-item>
</template>

<script setup lang="ts">
import { IonItem } from '@ionic/vue';
import ButtonGeneric from '@/components/ButtonGeneric.vue';
import InputGeneric from '@/components/InputGeneric.vue';
</script>