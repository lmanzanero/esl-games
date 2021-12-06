import { writable } from "svelte/store";

const defaultUsers = {
	users: [
    "Luis",
    "Eva",
    "Sophie",
    "John",
    "Steven",
    "Andy",
  ]
}
function createWheelStore() {
  const { subscribe, set, update,  } = writable(defaultUsers)
  return {
    subscribe,
    set,
    update
  }
}


export const wheelStore = createWheelStore();