import express from "express";
import { consultroute } from "./consulta/novaconsulta.js";
import { consultRouteList } from "./consulta/listagemconsulta.js";

const app = express();
app.use(express.json());
app.use(consultroute);
app.use(consultRouteList)


app.listen(4444, () => console.log("Servidor rodando...❤️"))
