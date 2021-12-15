import { writable } from "svelte/store";

const defaultUsers = {
	users: [
    {color:"#f82", label:"User0"},
		{color:"#0bf", label:"User1"},
		{color:"#fb0", label:"User2"},
		{color:"#0fb", label:"User3"},
		{color:"#b0f", label:"User4"},
		{color:"#f0b", label:"User5"},
		{color:"#bf0", label:"User6"},
		{color:"#fb5", label:"User7"},
		{color:"#bf0", label:"User8"},
		{color:"#fb5", label:"User11"},
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