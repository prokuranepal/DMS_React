import io from "socket.io-client";
import url from './url';
export const socket = io(url);
