import { Router } from "express";
import { conn } from "../data/dbConnection.js";

const consultRouteUpdate = Router();

consultRouteUpdate.put("/edit/agendamento", (req, res) => {
    const { id, paciente ,medico , data, horario, sala } = req.body;

    conn.query(
        `UPDATE agendamentos SET paciente = ${paciente}, medico = ${medico}, data = '${data}', horario = '${horario}', sala = ${sala} WHERE id = ${id}`,
        (err, result) => {
            if (err) {
                res.status(500).json({ erro: "Erro ao atualizar o agendamento." });
            } else {
                res.json({
                    mensagem: "Agendamento atualizado com sucesso!",
                });
            }
        }
    );
});


export { consultRouteUpdate }