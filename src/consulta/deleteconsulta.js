import { Router } from "express";
import { conn } from "../data/dbConnection.js";

const consultRouteDelete = Router();

consultRouteDelete.delete("/del/agendamento", (req, res) => {
    const { id } = req.body;

    conn.query(
        `delete from agendamentos where id=${id}`,
        (err, result) => {
            if (err) {
                res.status(500).json({ erro: "Erro ao excluir." });
            } else {
                res.json({
                    mensagem: "Excluido com sucesso",
                });
            }
        }
    );
});


consultRouteDelete.delete("/del/medico", (req, res) => {
    const { id } = req.body;

    conn.query(
        `delete from medicos where id=${id}`,
        (err, result) => {
            if (err) {
                res.status(500).json({ erro: "Erro ao excluir." });
            } else {
                res.json({
                    mensagem: "Excluido com sucesso",
                });
            }
        }
    );
});


consultRouteDelete.delete("/del/paciente", (req, res) => {
    const { cpf } = req.body;

    conn.query(
        `delete from pacientes where cpf=${cpf}`,
        (err, result) => {
            if (err) {
                res.status(500).json({ erro: "Erro ao excluir." });
            } else {
                res.json({
                    mensagem: "Excluido com sucesso",
                });
            }
        }
    );
});


consultRouteDelete.delete("/del/sala", (req, res) => {
    const { id } = req.body;

    conn.query(
        `delete from salas where id=${id}`,
        (err, result) => {
            if (err) {
                res.status(500).json({ erro: "Erro ao excluir." });
            } else {
                res.json({
                    mensagem: "Excluido com sucesso",
                });
            }
        }
    );
});


consultRouteDelete.delete("/del/tpcon", (req, res) => {
    const { id } = req.body;

    conn.query(
        `delete from tipoconsulta where id=${id}`,
        (err, result) => {
            if (err) {
                res.status(500).json({ erro: "Erro ao excluir." });
            } else {
                res.json({
                    mensagem: "Excluido com sucesso",
                });
            }
        }
    );
});


consultRouteDelete.delete("/del/pag", (req, res) => {
    const { id } = req.body;

    conn.query(
        `delete from pagamentos where id=${id}`,
        (err, result) => {
            if (err) {
                res.status(500).json({ erro: "Erro ao excluir." });
            } else {
                res.json({
                    mensagem: "Excluido com sucesso",
                });
            }
        }
    );
});


export { consultRouteDelete }
