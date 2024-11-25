import express from "express";
import { consultroute } from "./consulta/novaconsulta.js";

const app = express();
app.use(express.json());
app.use(consultroute);


app.listen(4444, () => console.log("Servidor rodando...❤️"))
