 import { writable } from "svelte/store";

 function microPhoneStore() {
   const { subscribe, set, update } = writable('');

   return {
     subscribe, 
     setSpeech: (text) => update(n => n = text), 
     reset: () => set('')
   }
 }

 export const useMicrophone  = microPhoneStore();