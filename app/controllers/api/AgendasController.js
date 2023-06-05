const Agenda = require('../../models/Agenda')

function AgendasController() {

    function save(req, res) {
        const agenda = {
            nome: req.body.nome,
            celular: req.body.celular,
            email: req.body.email,
            rua: req.body.rua,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            cep: req.body.cep,
            estado: req.body.estado,
            complemento: req.body.complemento
        }

    Agenda.create(agenda)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            console.log(err.errors)
            return res.status(400).json({
                menssagem: err.errors[0].message,
                tipo: err.errors[0].type,
                campo: err.errors[0].path
            })
        })
    }

    return {
        save
    }

}

module.exports = AgendasController();