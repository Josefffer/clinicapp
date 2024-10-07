const express = require('express');
const router = express.Router();
const Historia = require('../modelos/historia');

router.get('/', async (req, res) => {
  const historias = await Historia.find();
  res.send(historias);
});

router.get('/:id', async (req, res) => {
  const historia = await Historia.findById(req.params.id);
  res.send(historia);
});

router.post('/', async (req, res) => {
  const historia = new Historia({

    Nombre: req.body.Nombre,
    Usuario: req.body.Usuario,
    Contrasena: req.body.Contrasena,
    Cedula: eq.body.Cedula,
    Telefono: eq.body.Telefono
      
  });

  await historia.save().catch((err) => {
        console.log(err);
  });
  res.send(historia);
});

router.put('/:id', async (req, res) => {
  const historia = await Historia.findByIdAndUpdate(req.params.id, {
    Nombre: req.body.Nombre,
    Usuario: req.body.Usuario,
    Contrasena: req.body.Contrasena,
    Cedula: eq.body.Cedula,
    Telefono: eq.body.Telefono
  }, { new: true });
  res.send(historia);
});

router.delete('/:id', async (req, res) => {
  await Historia.findByIdAndDelete(req.params.id);
  res.send('Historia eliminada');
});

module.exports = router;