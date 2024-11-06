import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGameStore = defineStore('games', () => {
  const gameList = ref([]);

  const updateGameList = async () => {
    const resp = await fetch('/juegos.json');
    gameList.value = await resp.json();

    // gameList.value = data.map((game) => {
    //   const codigo = game.codigo;
    //   const nombre = game.nombre;
    //   const stock = parseInt(game.stock);
    //   const precio = game.precio;
    //   const color = game.color;

    //   return {
    //     codigo,
    //     nombre,
    //     stock,
    //     precio,
    //     color,
    //   };
    // });
  };

  return {
    gameList,
    updateGameList,
  };
});

// {
//   "codigo": "0001",
//   "nombre": "Sekiro",
//   "stock": "43",
//   "precio": "30000",
//   "color": "red"
// },
