const express =require ("express")
const router =express.Router()

const mainController= require("../controllers/mainController");


router.get("/", mainController.index);
router.get("/home",mainController.home)
router.get("/pruebaDetail/:pruebaId/",mainController.pruebaDetail)
router.get("/resultados", mainController.resultados)

module.exports=router;