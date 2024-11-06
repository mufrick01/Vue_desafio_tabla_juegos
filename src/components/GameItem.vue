<template>
  <tr style="height: 100%;">
    <td>{{ codigo }}</td>
    <td>{{ nombre }}</td>
    <td>{{ precio }}</td>
    <td>{{ localStock }}</td>
    <td style="display: flex; justify-content: center">
      <button @click="localStock++"> + </button>
      <button @click="localStock--"> - </button>
    </td>
  </tr>
</template>


<script setup>

import { ref } from 'vue'

const props = defineProps({
  codigo: { type: String, required: true },
  nombre: { type: String, required: true },
  stock: { type: String, required: true },
  precio: { type: String, required: true },
  color: { type: String, required: true },
})

const localStock = ref(parseInt(props.stock));

</script>
