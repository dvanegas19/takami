const dbConnection = require('../../config/dbConnection');
module.exports = app => {

  const connection = dbConnection();

   app.get('/api/v1/fabricantes', (req, res) => {
    connection.query('select IdFabricante, Fabricante, Activo from takami.fabricante', (err, result) => {
      res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
    });
  });

   app.get('/fabricantes:id', (req, res) => {
    const { numRecibo, clasematerial, tipoMaterial, cantidad, kilosrechazo,valorRechazo, valorUnitario } = req.body;
    connection.query('UPDATE ingresomaterial SET ? ',
      {
        clasematerial, 
        tipoMaterial, 
        cantidad, 
        kilosrechazo,
        valorRechazo, 
        valorUnitario
      }
    , (err, result) => {
      res.redirect('/ingresomaterial');
    });
  });
};
