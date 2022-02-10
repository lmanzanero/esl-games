import { io } from "socket.io-client";
const ENDPOINT = "https://chat-example.lmanzanero.repl.co/";

const socket = io(ENDPOINT)

export const quizClient = socket;