 import { writable } from "svelte/store";

 function useSpeechToText() {
   const { subscribe, set, update } = writable('');

   return {
     subscribe,
     getText: () => {n => n},
     getSpeech: () => {n => n},
     isSpeechMatchedToText : () => {true},
     reset: () => set('')
   }
 }

 export const speech  = useSpeechToText();