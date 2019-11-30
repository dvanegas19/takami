const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/api/v1/tipoEscudos', (req, res) => {
    connection.query('SELECT  IdTipoEscudo, Descripcion, Activo FROM tipoescudo ', (err, result) => {
     /* res.render('news/news', {
        news: result
      });*/
    res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
    });
  });

  app.post('/tipoEscudos', (req, res) => {
    const { Descricion, Activo } = req.body;
    //res.status(200).send({message: req.body.valorTotal})

    connection.query("INSERT INTO tipoescudo ( Descricion, Activo) VALUES (?,?) ",
      [
        Descricion,
        Activo
      ]
    , (err, result) => {
          if(err)  res.status(500).send({menssage: err.message})
          res.status(200).send({message: 'Registros almacenados', nitFuente})
    });
  });
};
