import { writable } from "svelte/store";

const defaultScores = {
	users: []
}
function createScoreKeeperStore() {
  const { subscribe, set, update,  } = writable(defaultScores)
  return {
    subscribe,
    set,
    update
  }
}


export const scoreKeeperStore = createScoreKeeperStore();

