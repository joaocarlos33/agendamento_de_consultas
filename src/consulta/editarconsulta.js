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


consultRouteUpdate.put("/edit/medico", (req, res) => {
    const { id , nome , crm , telefone , email , especialidade } = req.body;

    conn.query(
        `UPDATE medicos SET nome = '${nome}', crm = '${crm}', telefone = '${telefone}', email = '${email}', especialidade = '${especialidade}' WHERE id = ${id}`,
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


consultRouteUpdate.put("/edit/paciente", (req, res) => {
    const { cpf , nome , data_nascimento , telefone , email , endereco } = req.body;

    conn.query(
        `UPDATE pacientes SET nome = '${nome}', data_nascimento = '${data_nascimento}', telefone = '${telefone}', email = '${email}', endereco = '${endereco}' WHERE cpf = ${cpf} `,
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


consultRouteUpdate.put("/edit/pagamento", (req, res) => {
    const { id , data_pagamento , valor } = req.body;

    conn.query(
        `UPDATE pagamentos SET data_pagamento = '${data_pagamento}', valor = '${valor}' WHERE id = ${id} `,
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


consultRouteUpdate.put("/edit/sala", (req, res) => {
    const { id , numero , andar , tipo } = req.body;

    conn.query(
        `UPDATE salas SET numero = ${numero}, andar = ${andar} , tipo = '${tipo}' WHERE id = ${id} `,
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


consultRouteUpdate.put("/edit/tipodeconsulta", (req, res) => {
    const { id , descricao } = req.body;

    conn.query(
        `UPDATE tipoconsulta SET descricao = '${descricao}' WHERE id = ${id} `,
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