import express from "express";
import router from "./routes/router";
import cors from "cors"; // Importa el paquete CORS

const server = express();
server.use(cors());
server.use(express.json());
server.use(router);

export default server;
