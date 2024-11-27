import { Router } from "express";
import { conn } from "../data/dbConnection.js";

const consultRouteList = Router();

consultRouteList.get("/list/agendamento", (req, res) => {
    // const { } = req.body;

    conn.query("SELECT * FROM agendamentos", (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json(result)
    })
})


consultRouteList.get("/list/medico", (req, res) => {
    // const { } = req.body;

    conn.query("SELECT * FROM medicos", (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json(result)
    })
})

consultRouteList.get("/list/paciente", (req, res) => {
    // const { } = req.body;

    conn.query("SELECT * FROM pacientes", (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json(result)
    })
})


consultRouteList.get("/list/pagamento", (req, res) => {
    // const { } = req.body;

    conn.query("SELECT * FROM pagamentos", (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json(result)
    })
})


consultRouteList.get("/list/sala", (req, res) => {
    // const { } = req.body;

    conn.query("SELECT * FROM salas", (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json(result)
    })
})


consultRouteList.get("/list/tipoconsultas", (req, res) => {
    // const { } = req.body;

    conn.query("SELECT * FROM tipoconsulta", (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json(result)
    })
})


export{consultRouteList}
