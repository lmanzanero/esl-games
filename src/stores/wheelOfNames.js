import { writable } from "svelte/store";

const defaultUsers = {
	users: [
    {color:"#f82", label:""}, 
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