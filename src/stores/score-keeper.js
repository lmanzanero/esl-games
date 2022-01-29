import { writable } from "svelte/store";

const defaultScores = {
	users: [],
  canSave: true
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

