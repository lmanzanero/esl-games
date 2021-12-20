import { writable } from "svelte/store";

const defaultUsers = {
	users: ['user1']
}
function createWhackaMoleStore() {
  const { subscribe, set, update,  } = writable(defaultUsers)
  return {
    subscribe,
    set,
    update
  }
}


export const wheelStore = createWhackaMoleStore();