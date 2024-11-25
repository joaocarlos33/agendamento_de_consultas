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
            produto: result.cpf , nome , data_nascimento, telefone, email, endereco
        })
    })
})





export{consultroute}
