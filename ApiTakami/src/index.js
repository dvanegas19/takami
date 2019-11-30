const app = require('./config/server');

require('./app/routes/escudos')(app);
require('./app/routes/fabricantes')(app);
require('./app/routes/tipoEscudos')(app);
// starting the server
app.listen(app.get('port'), () => {
  console.log('servicio en el puerto: ', app.get('port'));
});
