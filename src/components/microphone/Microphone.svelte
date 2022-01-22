<script>
	import { store } from '../../stores/tic-tac-toe';

	import { onMount } from 'svelte';
	import { useMicrophone } from '../../stores/useMicrophone';
	export let buttonText = 'Start Game';
	export let isEvaluating = false;
	let isListening = false;
	onMount(() => {
		let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		var recognition = new SpeechRecognition();
		recognition.interimResults = true;
		recognition.continuous = true;
		recognition.addEventListener('result', (e) => {
			const transcript = Array.from(e.results)
				.map((result) => result[0])
				.map((result) => result.transcript)
				.join('');
			// use last word from array
			useMicrophone.setSpeech(transcript.split(' ').at(-1));
		});

		recognition.onstart = function () {
			console.log('Start');
			isListening = true;
		};

		recognition.onend = function () {
			console.log('End');
			isListening = false;
		};

		document.querySelector('.recordbtn').addEventListener('click', function () {
			console.log('Is Listening: ', isListening);
			useMicrophone.reset();
			recognition.start();
			if (isListening) {
				recognition.stop();
			}
		});
	});

	function evalWords(recognitionSpeeh, word) {
		if (recognitionSpeeh.toLowerCase().includes(word.toLowerCase())) {
			return true;
		} else {
			return false;
		}
	}

	$: {
		if (isListening) {
			// evalutate answer
			console.log($useMicrophone.length);
			if ($useMicrophone.length >= 15 && $useMicrophone.length >= 0) {
				useMicrophone.reset();
			}
			console.log(
				'Evalute ',
				$useMicrophone,
				'with: ',
				$store.word,
				evalWords($useMicrophone, $store.word)
			);
		}
	}
</script>

<div class="microphone-container">
	<button
		type="button"
		class="flex recordbtn justify-center justify-center m-auto px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 {isListening
			? 'cursor-not-allowed'
			: ''}"
		disabled={isListening}
	>
		<svg
			class={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${!isListening ? 'hidden' : ''}`}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			><circle
				class="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
			/><path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/></svg
		>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class={`h-7 w-7 mx-2 p-1 rounded bg-purple-800 ${isListening ? 'hidden' : ''}`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
			/>
		</svg>
		{!isListening ? buttonText : 'Listening ...'}
	</button>
	<p class="text-center p-4 m-auto text-white text-base font-semibold">
		You Said: <span class="text-green-700">{$useMicrophone}</span>
	</p>
</div>
