import { Router } from "express";
import { conn } from "../data/dbConnection.js";

const consultroute = Router();

consultroute.post("/new/pacientes", (req, res) => {
    const { cpf,nome, data_nascimento, telefone, email, endereco} = req.body;

    conn.query(`insert into pacientes ( cpf , nome, data_nascimento, telefone, email, endereco) values 
        ('${cpf}', '${nome}','${data_nascimento}',  '${telefone}', '${email}', '${endereco}' )`, (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json({
            "mensagem":"cadastrado com sucesso"
        })
    })
})


consultroute.post("/new/agendamento", (req, res) => {
    const { paciente, medico , data , horario , sala} = req.body;

    conn.query(`insert into agendamentos ( paciente , medico, data, horario, sala) values 
        ('${paciente}', '${medico}','${data}',  '${horario}', '${sala}' )`, (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json({
            "mensagem":"cadastrado com sucesso"
        })
    })
})


consultroute.post("/new/tipoconsultas", (req, res) => {
    const { descricao } = req.body;

    conn.query(`insert into tipoconsulta ( descricao ) values 
        ('${descricao}' )`, (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json({
            "mensagem":"cadastrado com sucesso"
        })
    })
})



consultroute.post("/new/horario", (req, res) => {
    const { dia_da_semana , horario_inicio , horario_fim } = req.body;

    conn.query(`insert into horarios ( dia_da_semana , horario_inicio , horario_fim ) values 
        ('${dia_da_semana}', '${horario_inicio}' , '${horario_fim}' )`, (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json({
            "mensagem":"cadastrado com sucesso"
        })
    })
})


consultroute.post("/new/medico", (req, res) => {
    const { nome , crm , telefone , email , especialidade  } = req.body;

    conn.query(`insert into medicos ( nome , crm , telefone , email , especialidade ) values 
        ('${nome}', '${crm}' , '${telefone}' , '${email}' , '${especialidade}')`, (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json({
            "mensagem":"cadastrado com sucesso"
        })
    })
})


consultroute.post("/new/sala", (req, res) => {
    const { numero , andar , tipo  } = req.body;

    conn.query(`insert into salas ( numero , andar , tipo ) values 
        ('${numero}', '${andar}' , '${tipo}' )`, (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json({
            "mensagem":"cadastrado com sucesso"
        })
    })
})


consultroute.post("/new/pagamento", (req, res) => {
    const { data_pagamento , valor } = req.body;

    conn.query(`insert into pagamentos ( data_pagamento , valor ) values 
        ('${data_pagamento}', '${valor}' )`, (err, result) => {

        if (err) {
            return res.json(err.message)
        }

        res.json({
            "mensagem":"cadastrado com sucesso"
        })
    })
})


export{consultroute}
