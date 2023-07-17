const intakeModel = require('../models/Intakes')

class IntakesController{


    static async intakes(req , res){
        const resulet = await intakeModel.intakes()
        if(resulet)
        res.send(resulet)
    }

    static async editintake(req , res){
        let id = req.body.id
        let intake = req.body.intake
        const resulet = await intakeModel.editintake(intake , id)
        if(resulet)
        res.send(resulet)
    }

    static async intakestudents(req , res){
        let intake = req.params.intake
        const resulet = await intakeModel.intakestudents(intake)
        if(resulet)
        res.send(resulet)
    }

    static async deleteintake(req , res){
        let id = req.params.id
        const resulet = await intakeModel.deleteintake(id)
        if(resulet)
        res.send(resulet)
    }

    static async addintake(req , res){
        let intake = req.body.intake
        const resulet = await intakeModel.addintake(intake)
        if(resulet)
        res.send(resulet)
    }
}

module.exports = IntakesController