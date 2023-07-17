const db = require('../config/db')


class intakeModel{

    static async intakes(){

        return new Promise (res=>{
            
            db.query("select * from intakes" , [], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }

    static async intakestudents(intake){

        return new Promise (res=>{
            
            db.query("select * from students where intake=?" , [intake], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }


    static async addintake(intake){

        return new Promise (res=>{
            
            db.query("insert into intakes (intake) values(?)" , [intake], (err,re)=>{
                if(re)
                res(re , err);
                console.log(err)
                console.log(re)
            })
        })
    }

    static async deleteintake(id){

        return new Promise (res=>{
            
            db.query("delete from intakes where id=?" , [id], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }
    static async editintake( intake ,id  ){

        return new Promise (res=>{
            
            db.query("update intakes set intake=? where id=?" , [intake, id], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }


}

module.exports = intakeModel