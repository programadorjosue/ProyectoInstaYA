const express = require('express');
const router = express.Router();
const taskModel = require("../models/task");

router.get("/", async (req, res) => {    //consultar registros
    const tasks = await taskModel.find();
    console.log(tasks);
    res.json(tasks);
});

router.post("/", async (req, res) => {      //crear

    const { cityR, dirR, nameR, tipoP, cityD, dirD, nameD, celD } = req.body
    const task = new taskModel({cityR, dirR, nameR, tipoP, cityD, dirD, nameD, celD})

    await task.save()

    console.log(task);
    res.json({status:"Recibido"});
});

router.put("/:id", async (req, res) => {    //actualizar
    const { cityR, dirR, nameR, tipoP, cityD, dirD, nameD, celD } = req.body
    const newTask = {cityR, dirR, nameR, tipoP, cityD, dirD, nameD, celD}

    await taskModel.findByIdAndUpdate(req.params.id, newTask)

    
    res.json({status:"Modificado"});
});


router.delete("/:id", async (req, res) => {    //eliminar
    

    await taskModel.findByIdAndRemove(req.params.id)

    
    res.json({status:"Eliminado"});
});


router.get("/:id", async (req, res) => {    //consultar registros específicos
    const task = await taskModel.findById(req.params.id)
    res.json(task);
});



module.exports = router;