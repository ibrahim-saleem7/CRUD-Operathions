const studentModel = require('../models/Students')

class StudentsController{

    static async allstudents(req , res){
        const resulet = await studentModel.allstudents()
        if(resulet)
        res.send(resulet)
    }

    static async getstudentbyid(req , res){
        let id = req.params.id
        const resulet = await studentModel.getstudentbyid(id)
        if(resulet)
        res.send(resulet)
    }

    static async laststudent(req , res){
        const resulet = await studentModel.laststudent()
        if(resulet)
        res.send(resulet)
    }

    static async getstudentbyname(req , res){
        let firstName = req.params.firstName
        const resulet = await studentModel.getstudentbyname(firstName)
        if(resulet)
        res.send(resulet)
        else
        res.send(`sory not find user by name : ${firstName}`)
    }

    static async addstudent(req , res){
        let firstName =req.body.firstName
        let lastName =req.body.lastName
        let idNumber =req.body.idNumber
        let email =req.body.email
        let phone =req.body.phone
        let program =req.body.program
        let intake =req.body.intake
        let code =req.body.code
        let country =req.body.country
        const resulet = await studentModel.addstudent(firstName,lastName,idNumber,email,phone,program,intake,code,country)
        if(resulet)
        {
            let data = req.body;
            res.send('Data Received: ' + JSON.stringify(data));
        }
    }

    static async deletestudent(req , res){
        let id =req.params.id
        if (id){
            const resulet = await studentModel.deletestudent(id)
            if(resulet){
                res.send("uesr deleted ")
                console.log("uesr deleted ")
            }
            
            else{
                res.send("user not deleted ")
                console.log(" user not deleted ")
            }
        }
    }

    static async editstudent(req , res){
        let id =req.body.id;
        let firstName =req.body.firstName;
        let lastName =req.body.lastName;
        let idNumber =req.body.idNumber;
        let email =req.body.email;
        let phone =req.body.phone;
        let program =req.body.program;
        let intake =req.body.intake
        let code =req.body.code;
        let country =req.body.country;
        const resulet = await studentModel.editstudent(firstName,lastName,idNumber,email,phone,program,intake,code,country ,id)
        if(resulet)
        res.send("uesr edited ")
    }

    

}

module.exports = StudentsController