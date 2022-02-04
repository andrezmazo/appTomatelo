const express = require("express")
const path = require ("path")

const pruebas =[
    {id:"1",
    tipo: "Facil",
    titulo: "Yo nunca" ,
    descripcion: "Yo he vomitado de la borrachera ",
    valor: "1",
    },

    {id: "2",
    tipo: "Medio",
    titulo: "Prueba",
    descripcion: "Mostrar su ultima conversacion",
    valor: "2",
    },

    {id: "3",
    tipo: "Dificl",
    titulo: "Llamada",
    descripcion: "Llama a una persona aleatoreamente",
    valor: "4",
    }
        
]


const mainController = {
    index: (req,res) => {
        res.render("index")
    } 
        ,
    home: (req,res) => {
        res.render("home")
    }   ,
    pruebaDetail:  (req,res) => {
        let prueba = pruebas.find(prueba => prueba.id ==req.params.pruebas.id)
        console.log(prueba)
        res.render("pruebaDetail", {"pruebaId": pruebaId})
    },
    resultados: (req,res) => {
        res.render("resultados")
    }

}

module.exports= mainController;