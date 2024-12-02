import express from "express";
import { consultroute } from "./consulta/novaconsulta.js";
import { consultRouteList } from "./consulta/listagemconsulta.js";
import { consultRouteUpdate } from "./consulta/editarconsulta.js";
import { consultRouteDelete } from "./consulta/deleteconsulta.js";

const app = express();
app.use(express.json());
app.use(consultroute);
app.use(consultRouteList)
app.use(consultRouteUpdate)
app.use(consultRouteDelete)


app.listen(4444, () => console.log("Servidor rodando...❤️"))
