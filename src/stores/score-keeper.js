import { writable } from "svelte/store";

const defaultScores = {
	users: [
    {
      username: "User 1",
      score: 30
	  },
    {
      username: "User 2",
      score: 10
	  },
    {
      username: "User 3",
      score: 0
	  },
    {
      username: "User 4",
      score: 30
	  },
    {
      username: "User 5",
      score: 10
	  },
    {
      username: "User 6",
      score: 0
	  },
]
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

