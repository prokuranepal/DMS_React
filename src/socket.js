import socketIOClient from "socket.io-client";

const endpoint = 'http://992240c2839e.ngrok.io/JT601';
export const socket = socketIOClient(endpoint);