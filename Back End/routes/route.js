const express = require('express')
const app = express()
const cors = require('cors')

const router = require('express').Router()
const studentsController = require('../controllers/StudentsController')
const intakesController = require('../controllers/IntakesController')
const programesController = require('../controllers/ProgrammesController')
const {check} = require('express-validator')

app.use(cors({
    origin: '*'
}));

router.get('/', (req, res) => res.send('Hello World!'))


router.post("/addprogram",programesController.addprogram)
router.get("/allprogrammes",programesController.allprogrammes)
router.put("/editprogram",programesController.editprogram)
router.get("/programstudents/:program",programesController.programstudents)
router.delete("/deleteprogram/:id",programesController.deleteprogram)

router.get("/allstudents",studentsController.allstudents)
router.post("/addstudent",studentsController.addstudent)
router.get("/getstudent/:firstName",studentsController.getstudentbyname)
router.get("/student/:id",studentsController.getstudentbyid)
router.put("/editstudent",studentsController.editstudent)
router.delete("/deletestudent/:id",studentsController.deletestudent)
router.get("/laststudent",studentsController.laststudent)

router.post("/addintake",intakesController.addintake)
router.get("/intakes",intakesController.intakes)
router.get("/intakestudents/:intake",intakesController.intakestudents)
router.put("/editintake",intakesController.editintake)
router.delete("/deleteintake/:id",intakesController.deleteintake)


module.exports =router