const programModel = require('../models/Programmes')

class ProgrammesController{

    static async allprogrammes(req , res){
        const resulet = await programModel.allprogrammes()
        if(resulet)
        res.send(resulet)
    }

    static async editprogram(req , res){
        let id = req.body.id
        let program = req.body.program
        const resulet = await programModel.editprogram(program ,id )
        if(resulet)
        res.send(resulet)
    }

    static async programstudents(req , res){
        let program = req.params.program
        const resulet = await programModel.programstudents(program)
        if(resulet)
        res.send(resulet)
    }

    static async addprogram(req , res){
        let program = req.body.program
        const resulet = await programModel.addprogram(program)
        if(resulet)
        res.send(resulet)
    }

    static async deleteprogram(req , res){
        let id = req.params.id
        const resulet = await programModel.deleteprogram(id)
        if(resulet)
        res.send(resulet)
    }

}

module.exports = ProgrammesController