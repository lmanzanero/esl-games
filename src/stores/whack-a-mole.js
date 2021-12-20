import { writable } from "svelte/store";

const defaultState = {
	names: ''
}
function createWhackaMoleStore() {
  const { subscribe, set, update,  } = writable(defaultState)
  return {
    subscribe,
    set,
    update
  }
}


export const whackaMoleStore = createWhackaMoleStore();