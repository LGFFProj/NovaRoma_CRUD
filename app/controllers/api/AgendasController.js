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
    };

    function remove(req, res) {
        const id = req.params.id;

        Agenda.findOne({ where: { id: id }, raw: true })
        .then((data) => {
            
            if (!data) {
                return res.status(404).send({
                    message: "Sei onde tá isso não truta"
                })
            };

            Agenda.destroy({ where: { id: id } })
            .then(() => {
                res.status(200).json({
                    message: "AGENDA EXTERMINADA, AGORA ME DIGA ONDE ESTÁ JHON CONNOR"
                })
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => res.json(err));
    };

    async function listar(req, res){
        Agenda.findAll({ raw: true })
        .then(( data ) => {
            res.status(200).json(data)
        })
        .catch((err) => console.log(err))
    };

    async function show(req, res) {
        const id = req.params.id;

        try{
            const data = await Agenda.findOne({ where: { id: id }, raw: true });
            
            if (!data) {
                return res.status(404).send({
                    message: "Tem isso aqui não parça"
                })
            }

            res.status(200).json(data)

        }catch (err){
            res.status(500).json({
                message:"Erro Interno"
            })
        }
    }

    function update(req, res) {
        const id = req.params.id

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

        Agenda.findOne({ where: { id: id }, raw: true })
        .then((dados) => {
            if (!dados) {
                return res.status(404).send({
                    message: "Dados não encontrados"
                })
            }

            Agenda.update(agenda, { where: { id: id } })
            .then( () => {
                res.json({
                    message: "Agenda Atualizada"
                })
            })
            .catch((err) => {
                console.log(err.errors)
                return res.status(400).json({
                    menssagem: err.errors[0].message,
                    tipo: err.errors[0].type,
                    campo: err.errors[0].path
                })
            })
        })

    }

    return {
        save,
        remove,
        listar,
        show,
        update
    }

}

module.exports = AgendasController();