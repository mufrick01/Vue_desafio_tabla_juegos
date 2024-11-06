import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGameStore = defineStore('games', () => {
  const gameList = ref([]);

  const updateGameList = async () => {
    const resp = await fetch('/juegos.json');
    gameList.value = await resp.json();
  };

  return {
    gameList,
    updateGameList,
  };
});
