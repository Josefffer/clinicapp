const express = require('express');
const router = express.Router();
const Usuario = require('../modelos/usuario');

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.send(usuarios);
});

router.get('/:id', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.send(usuario);
});

router.post('/', async (req, res) => {
  const usuario = new Usuario({

    Nombre: req.body.Nombre,
    Usuario: req.body.Usuario,
    Contrasena: req.body.Contrasena,
    Cedula: req.body.Cedula,
    Telefono: req.body.Telefono
      
  });

  await usuario.save().catch((err) => {
        console.log(err);
  });
  res.send(usuario);
});

router.put('/:id', async (req, res) => {
  const usuario = await Usuario.findByIdAndUpdate(req.params.id, {
    Nombre: req.body.Nombre,
    Usuario: req.body.Usuario,
    Contrasena: req.body.Contrasena,
    Cedula: req.body.Cedula,
    Telefono: req.body.Telefono
  }, { new: true });
  res.send(usuario);
});

router.delete('/:id', async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.send('Usuario eliminado');
});

module.exports = router;