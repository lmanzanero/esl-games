import { writable } from "svelte/store";

const defaultUsers = {
	users: [
    "User 1",
    "User 1",
    "User 1",
    "User 1",
    "User 1",
    "User 1",
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