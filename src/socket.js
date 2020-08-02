import socketIOClient from "socket.io-client";
const endpoint = '';
export const socket = socketIOClient(endpoint);