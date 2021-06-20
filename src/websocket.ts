import io from "socket.io-client";
import { SOCKET_URL } from "./apis";

const ws = io(SOCKET_URL);

export { ws };
