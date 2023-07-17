const db = require('../config/db')


class studentModel{

    static async allstudents(){

        return new Promise (res=>{
            
            db.query("select * from students" , [], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }

    static async getstudentbyid(id){

        return new Promise (res=>{
            
            db.query("select * from students where id=?" , [id], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }

    static async laststudent(){

        return new Promise (res=>{
            
            db.query("SELECT * FROM students ORDER BY ID DESC LIMIT 1", [], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }

    static async getstudentbyname(firstName){

        return new Promise ((res, rej)=>{
            
            db.query("select * from students where firstName=?" , [firstName], (err,re)=>{
                if(!err)
                res(re)
                else
                rej(err)
                
            })
        })
    }

    static async addstudent(firstName , lastName ,idNumber, email  , phone , program , intake , code , country ){

        return new Promise (res=>{
            
            db.query("insert into students (firstName,lastName,idNumber,email,phone,program,intake,code,country) values(?,?,?,?,?,?,?,?,?)" , [firstName,lastName,idNumber,email,phone,program,intake,code,country], (err,re)=>{
                if(re)
                res(re , err);
                console.log(err)
                console.log(re)
            })
        })
    }

    static async deletestudent(id){

        return new Promise (res=>{
            
            db.query("delete from students where id=?" , [id], (err,re)=>{
                if(err)
                res(false)
                else{
                    res(true)
                    console.log("uesr deleted ")

                }
            })
        })
    }

    static async editstudent(firstName,lastName,idNumber,email,phone,program,intake,code,country ,id){

        return new Promise (res=>{
            
            db.query("update students set firstName=?,lastName=?,idNumber=?,email=?,phone=?,program=?,intake=?,code=?,country=? where id=?" , [firstName,lastName,idNumber,email,phone,program,intake,code,country ,id], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }

}

module.exports = studentModel