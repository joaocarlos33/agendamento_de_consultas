import { Router } from "express";
import { conn } from "../data/dbConnection.js";

const consultRouteUpdate = Router();

consultRouteUpdate.put("put/agendamento", (req, res) => {
    const {teste , id} = req.body;

    conn.query(``, (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json(result)
    })
})

export{consultRouteUpdate}