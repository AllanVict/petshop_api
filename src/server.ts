import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { router } from "./router/MainRouter";
import cors from "cors";
import { mongoConnect } from "./database/mongose";

dotenv.config();

mongoConnect();

const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(router);

server.use((req, res) => {
  res.status(404);
  res.json({ error: "Rota não encontrada" });
});

server.listen(process.env.PORT);
