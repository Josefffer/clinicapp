const express = require('express');
const router = express.Router();
const Paciente = require('../modelos/paciente');

router.get('/', async (req, res) => {
  const pacientes = await Paciente.find();
  res.send(pacientes);
});

router.get('/:id', async (req, res) => {
  const paciente = await Paciente.findById(req.params.id);
  res.send(paciente);
});

router.post('/', async (req, res) => {
  const paciente = new Paciente({
    Nombre: req.body.Nombre,
    Cedula: eq.body.Cedula,
    FechaNacimiento: eq.body.FechaNacimiento,
      Sexo: eq.body.Sexo,
      Telefono: eq.body.Telefono,
      Correo: eq.body.Correo,
      Direccion: eq.body.Direccion
  });

  await paciente.save().catch((err) => {
        console.log(err);
  });
  res.send(paciente);
});

router.put('/:id', async (req, res) => {
  const paciente = await Paciente.findByIdAndUpdate(req.params.id, {
    Nombre: req.body.Nombre,
    Cedula: eq.body.Cedula,
    FechaNacimiento: eq.body.FechaNacimiento,
      Sexo: eq.body.Sexo,
      Telefono: eq.body.Telefono,
      Correo: eq.body.Correo,
      Direccion: eq.body.Direccion
  }, { new: true });
  res.send(paciente);
});

router.delete('/:id', async (req, res) => {
  await Paciente.findByIdAndDelete(req.params.id);
  res.send('Paciente eliminado');
});

module.exports = router;