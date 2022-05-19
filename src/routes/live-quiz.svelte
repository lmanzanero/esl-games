<script>
	import SettingsModal from '../components/modals/SettingsModal.svelte';
	import { onMount } from 'svelte';
	import { quizClient } from '$lib/socketsConfig';
	let allScores = [20, 30];
	let isModalOpen = false;
	let room = '';
	let username = '';
	let activity = '';
	let chartData;
	function toggleModal() {
		return (isModalOpen = !isModalOpen);
	}
	$: score = allScores.reduce((t, n) => t + n, 0);
	const questions = [
		{
			question: 'What is 2 + 2?',
			answers: [
				{ text: '4', correct: true },
				{ text: '22', correct: false },
				{ text: '25', correct: false },
				{ text: '12', correct: false }
			]
		},
		{
			question: 'What is your name?',
			answers: [
				{ text: 'My name is Dora.', correct: true },
				{ text: 'What do you mean?', correct: false },
				{ text: 'Because I like pizza.', correct: false },
				{ text: 'Your name is Dora.', correct: false }
			]
		},
		{
			question: 'What did you do yesterday?',
			answers: [
				{ text: 'I eat a lot of pizza', correct: false },
				{ text: 'I ate a lot of pizza', correct: true },
				{ text: 'I will eat a lot of pizza.', correct: false },
				{ text: 'I am eating a lot of pizza.', correct: false }
			]
		},
		{
			question: 'What will you do tomorrow?',
			answers: [
				{ text: 'I played video games.', correct: false },
				{ text: 'I am playing videos games.', correct: false },
				{ text: 'I play video games everyday.', correct: false },
				{ text: 'I will play video games tomorrow', correct: true }
			]
		}
	];

	function updateScore(score) {
		allScores.push(score);
		allScores = allScores;
		quizClient.emit('userScore', score);
	}

	onMount(() => {
		const question = document.querySelector('.question');
		const answers = document.querySelectorAll('.answers .answer');
		const answerIcons = document.querySelectorAll('.answers .answer svg');
		const answerIconPaths = document.querySelectorAll('.answers .answer svg path');

		function shuffleQuestions() {
			//get random question
			const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
			//set random question to dom
			question.textContent = randomQuestion.question;
			//set random answers to dom
			answers.forEach((answer, index) => {
				answer.lastChild.textContent = randomQuestion.answers[index].text;
				//add attribute to html to see if answer is correct or wrong
				answer.setAttribute('is-correct', `${randomQuestion.answers[index].correct}`);
				answer.setAttribute('index', `${index}`);
			});
			//show answers
			answerIcons.forEach((answer) => {
				answer.classList.add('hidden');
			});
		}

		answers.forEach((answer) => answer.addEventListener('click', validateAnswer));

		function validateAnswer(answer) {
			const answerIndex = answer.target.getAttribute('index');
			//validate answer
			if (answer.target.getAttribute('is-correct') === 'true') {
				//toggle correct answer icon button
				answerIcons[answerIndex].classList.add('text-green-800');
				answerIcons[answerIndex].classList.remove('hidden');
				answerIconPaths[answerIndex].setAttribute(
					'd',
					'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
				);
				updateScore(+50);
				setTimeout(() => {
					shuffleQuestions();
				}, 500);
			} else {
				updateScore(-50);
				answerIcons[answerIndex].classList.add('text-red-800');
				answerIcons[answerIndex].classList.remove('hidden');
				answerIconPaths[answerIndex].setAttribute(
					'd',
					'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
				);
			}
		}

		shuffleQuestions();
		quizClient.on('connection', function (msg) {
			console.log('wtf: ', msg);
			score = msg;
		});

		// Get room and users
		quizClient.on('roomUsers', ({ room, users }) => {
			console.log(room, users);
		});

		quizClient.on('message', (message) => {
			console.log(message);
			activity = message;
		});

		quizClient.on('disconnect', () => {
			console.log('user disconnected');
		});
	});

	function joinRoom() {
		console.log('Joing room with: ', username, room, score);
		quizClient.emit('joinRoom', { username, room, score });
	}
</script>

<svelte:head>
	<!-- elements go here -->
	<title>ESL Live Quiz</title>
	<meta
		name="description"
		content="Create your own quiz and have your students students compete by answering questions on their electronic devices using their voice."
	/>
</svelte:head>
<div class="bg-indigo-600">
	<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<span class="flex p-2 rounded-lg bg-indigo-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-7 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<p class="text-white px-1">{score}</p>
				</span>
			</div>
			<div class="scores flex items-center justify-between overflow-x-auto">
				{#each allScores as scorer}
					<div class="score w-full mx-2 sm:order-2 sm:mt-0 sm:w-auto">
						<div
							class="flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
						>
							${scorer}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
<div class="grid grid-cols-2">
	<div class="container m-auto p-4">
		<div class="flex flex-row">
			<button class="bg-blue-500 text-white py-2 px-6 m-2 hover:bg-blue-600 rounded-full flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="animate-bounce h-6 w-6"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>stats</span>
			</button>
			<button
				class="bg-blue-500 text-white py-2 px-6 m-2 hover:bg-blue-600 rounded-full flex"
				on:click={toggleModal}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
					/>
				</svg>
				<span>Join</span>
			</button>
			<button class="bg-blue-500 text-white py-2 px-6 m-2 hover:bg-blue-600 rounded-full flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
					/>
				</svg>
				<span>Create</span>
			</button>
		</div>
		<div class="flex justify-center p-4">
			<h2 class="question text-3xl text-gray">What is your name?</h2>
		</div>
		<div class="answers grid grid-cols-1 gap-1 md:grid-cols-2">
			<button
				class="answer flex justify-center rounded shadow text-center p-4 bg-blue-300 w-full hover:bg-blue-500"
			>
				<!-- Column Content -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 mx-4 hidden"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span class="pointer-events-none">...</span>
			</button>

			<button
				class="answer flex justify-center rounded shadow text-center p-4 bg-red-300 w-full hover:bg-red-500"
			>
				<!-- Column Content -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-red-800 mx-4 hidden"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span class="pointer-events-none">...</span>
			</button>

			<button
				class="answer flex justify-center rounded shadow text-center p-4 bg-indigo-300 w-full hover:bg-indigo-500"
			>
				<!-- Column Content -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-red-800 mx-4 hidden"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span class="pointer-events-none">...</span>
			</button>

			<button
				class="answer flex justify-center rounded shadow text-center p-4 bg-green-300 w-full hover:bg-green-500"
			>
				<!-- Colums Content -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-red-800 mx-4 hidden"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span class="pointer-events-none">...</span>
			</button>
		</div>
	</div>
	<div>
		<div class="charts">Charts</div>
		<div class="activity">{JSON.stringify(activity)}</div>
	</div>
</div>
<SettingsModal {isModalOpen} {toggleModal}>
	<div class="flex justify-center">
		<input
			type="text"
			bind:value={room}
			class="p-2 border-2 rounded border-blue-300 mx-1"
			placeholder="Room ID"
		/>
		<input
			type="text"
			bind:value={username}
			class="p-2 border-2 rounded border-blue-300 mx-1"
			placeholder="Username"
		/>
		<button
			on:click={joinRoom}
			class="bg-blue-500 text-white py-2 px-6 mx-2 hover:bg-blue-600 rounded flex"
		>
			Join
		</button>
	</div>
</SettingsModal>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
