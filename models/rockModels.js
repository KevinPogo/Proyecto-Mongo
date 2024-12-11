const mongoose = require('mongoose');


const RockSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  genero: { type: String, default: 'rock' }, 
  paisOrigen: { type: String, required: true }, 
  añoInicio: { type: Number, required: true }, 
  añoSeparacion: { type: Number, default: null }, 
  descripcion: { type: String, required: true }, 
  albumes: [
    {
      titulo: { type: String, required: true }, 
      añoLanzamiento: { type: Number, required: true },
      canciones: { type: [String], default: [] } 
    }
  ],
  premios: { type: [String], default: [] }, 
  estado: {
    type: String,
    enum: ['activo', 'separado', 'fallecido'], 
    default: 'activo'
  }
});

// Exportar el modelo
module.exports = mongoose.model('Bandas', RockSchema);
