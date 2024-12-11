const express = require('express');
const router = express.Router();
const Rock = require('../models/rockModels'); 

// Crear una banda de rock (POST)
router.post('/', async (req, res) => {
  try {
    const nuevaBanda = new Rock(req.body);  
    const bandaGuardada = await nuevaBanda.save();  
    res.status(201).json(bandaGuardada);  
  } catch (error) {
    res.status(400).json({ error: error.message });  
  }
});

// Obtener todas las bandas de rock (GET)
router.get('/', async (req, res) => {
  try {
    const bandas = await Rock.find();  
    res.status(200).json(bandas);  
  } catch (error) {
    res.status(500).json({ error: error.message });  
  }
});

// Obtener una banda de rock por ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const banda = await Rock.findById(req.params.id);  
    if (!banda) return res.status(404).json({ error: 'Banda no encontrada' });  
    res.status(200).json(banda);  
  } catch (error) {
    res.status(500).json({ error: error.message });  
  }
});

// Actualizar una banda de rock (PUT)
router.put('/:id', async (req, res) => {
  try {
    const bandaActualizada = await Rock.findByIdAndUpdate(req.params.id, req.body, {
      new: true,  
      runValidators: true  
    });
    if (!bandaActualizada) return res.status(404).json({ error: 'Banda no encontrada' });  
    res.status(200).json(bandaActualizada);  
  } catch (error) {
    res.status(400).json({ error: error.message });  
  }
});

// Eliminar una banda de rock (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const bandaEliminada = await Rock.findByIdAndDelete(req.params.id);  
    if (!bandaEliminada) return res.status(404).json({ error: 'Banda no encontrada' });  
    res.status(200).json({ message: 'Banda eliminada' });  
  } catch (error) {
    res.status(500).json({ error: error.message });  
  }
});

module.exports = router;
