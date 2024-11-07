<template>


  <h1 class="text-center">Tienda 32-Bits</h1>
  <h3 class="text-center" style="margin:30px 0 10px 0 ;">Lista De Juegos</h3>
  <div style="display: flex; justify-content: center;">
    <table class="text-center" style="flex-grow: 1; margin: 20px 20px;" border="1">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stocks</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <GameItem v-for="(game) in gameStore.gameList" :key="game.codigo" :="game" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useGameStore } from '@/stores/useGamesStore';
import GameItem from '@/components/GameItem.vue';

const gameStore = useGameStore();

</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
