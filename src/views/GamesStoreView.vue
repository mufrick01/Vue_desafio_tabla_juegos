<template>


  <h1 class="text-center">Tienda 32 bits</h1>
  <h3 class="text-center" style="margin:30px 0 10px 0 ;">lista de juegos</h3>
  <div style="display: flex; justify-content: center;">
    <table class="text-center" style="flex-grow: 1; margin: 20px 40px;">
      <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Stocks</th>
        <th>Acción</th>
      </tr>
      <GameItem v-for="(game) in gameStore.gameList" :key="game.codigo" :="game" />
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useGameStore } from '@/stores/useGamesStore';
import GameItem from '@/components/GameItem.vue';

const gameStore = useGameStore();

onMounted(async () => {
  gameStore.updateGameList()
})
</script>

<style scoped>
.text-center {
  text-align: center;
}

tr {
  border: #333 solid 2px;
}
</style>
