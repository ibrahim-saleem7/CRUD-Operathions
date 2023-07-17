const db = require('../config/db')


class programModel{

    static async allprogrammes(){

        return new Promise (res=>{
            
            db.query("select * from programmes" , [], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }

    static async programstudents(program){

        return new Promise (res=>{
            
            db.query("select * from students where program=?" , [program], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }

    static async addprogram(program){

        return new Promise (res=>{
            
            db.query("insert into programmes (program) values(?)" , [program], (err,re)=>{
                if(re)
                res(re , err);
                console.log(err)
                console.log(re)
            })
        })
    }

    static async editprogram( program ,id  ){

        return new Promise (res=>{
            
            db.query("update programmes set program=? where id=?" , [program, id], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }

    static async deleteprogram(id){

        return new Promise (res=>{
            
            db.query("delete from programmes where id=?" , [id], (err,re)=>{
                if(!err)
                res(re)
            })
        })
    }

}

module.exports = programModel