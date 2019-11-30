const dbConnection = require('../../config/dbConnection');
module.exports = app => {

  const connection = dbConnection();
  //const jwt = require('express-jwt');
  //const secret  = { secret: process.env.SECRET || 'example' } 
  app.post('/api/v1/escudos', (req, res) => {
    const {  IdFabricante, Consumo, FuerzaRuptura, FuerzaMinima, IdTipoEscudo, FechaLanzamiento, TiempoVidaEstimado } = req.body;
    //const {  model } = req.body;
    let sql = `CALL spi_EscudosDeflectores(?,?,?,?,?,?,?)`;
    connection.query(sql,
             [
              IdFabricante,
              Consumo, 
              FuerzaRuptura, 
              FuerzaMinima, 
              IdTipoEscudo, 
              FechaLanzamiento, 
              TiempoVidaEstimado
             ]
      
    , (err, result) => {
      res.send(JSON.stringify({"status": 200, "error": err, "response": result}));
    });
    //res.send(JSON.stringify({"status": 200, "error": "", "response": req.body}));
  });

  app.put('/api/v1/escudos', (req, res) => {
    const {  IdEscudosDeflectores,IdFabricante, Consumo, FuerzaRuptura, FuerzaMinima, IdTipoEscudo, FechaLanzamiento, TiempoVidaEstimado } = req.body;
    let sql = `CALL spu_EscudosDeflectores(?,?,?,?,?,?,?,?)`;
    connection.query(sql,
         [IdEscudosDeflectores,
         IdFabricante,
         Consumo, 
         FuerzaRuptura, 
         FuerzaMinima, 
         IdTipoEscudo, 
         FechaLanzamiento, 
         TiempoVidaEstimado]
      
    , (err, result) => {
      res.send(JSON.stringify({"status": 200, "error": err, "response": result}));
    });
  });

  app.delete('/api/v1/escudos', (req, res) => {
    const {  id} = req.query;
   let sql = `CALL spd_EscudosDeflectores(?)`;
    connection.query(sql,          
      [id]   
    , (err, result) => {
      if(err) res.send(JSON.stringify({"status": 409 , "error": err, "response": result}));
      res.send(JSON.stringify({"status": 201, "error": err, "response": result}));
    });
  });

  app.get('/api/v1/escudos', (req, res) => {
    let sql = `CALL sps_EscudosDeflectores()`;
    connection.query(sql,          
            
    (err, result) => {
      if(err) res.send(JSON.stringify({"status": 409 , "error": err, "response": result}));
      res.send(JSON.stringify({"status": 201, "error": err, "response": result[0]}));
    });
  });
};
