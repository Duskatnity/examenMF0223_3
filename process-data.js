(async () => {
  const fs = require('fs/promises')

  const data = require('./examen-data.json');

  const result = data.records.reduce((acc, record) => {
    const municipio = record[8]; // Índice del campo "Municipi"
    const grupo = record[3]; // Índice del campo "Grup"
  
    if (!acc[municipio]) {
      acc[municipio] = {};
    }
  
    if (!acc[municipio][grupo]) {
      acc[municipio][grupo] = 0;
    }
  
    acc[municipio][grupo] += 1;
  
    return acc;
  }, {});
  
  fs.writeFile('processed-data.json', JSON.stringify(result, null, 2), (err) => {
    if (err) {
      console.error('Error al guardar el archivo:', err);
    } else {
      console.log('Archivo guardado en:', outputPath);
    }
  });
})()