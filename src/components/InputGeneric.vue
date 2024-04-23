<template>
  <ion-label position="floating">{{ label }}</ion-label>
  <ion-input :type="type" :id="id" :value="value" @input="updateValue($event.target.value)"
    :placeholder="placeholder"></ion-input>
</template>

<script lang="ts">
import { IonInput, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: String,
    id: {
      type: String,
      required: true,
    },
    value: String,
    placeholder: String,
    label: String
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(newValue: string) {
      this.$emit('update:modelValue', newValue);
    }
  }
});
</script>