import { writable } from "svelte/store";

const defaultScores = {
	users: [
    {
      username: "Luis",
      score: 30
	  },
    {
      username: "Eva",
      score: 10
	  },
    {
      username: "John",
      score: 0
	  },
    {
      username: "Sofia",
      score: 30
	  },
    {
      username: "Hannah",
      score: 10
	  },
    {
      username: "Jerry",
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

