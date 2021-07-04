const express = require('express')
const app = express()
const path = require('path')

/* Settings
Definimos el puerto con una variable de express */
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'ejs')
/* End settings */

/* Middlewares */

/* Routes */
app.use(require('./routes/'))
/* End routes */

/* Static files */
app.use(express.static(path.join(__dirname, 'public')))
/* End static files */

/* Iniciamos el servidor por el puerto 3000 */
app.listen(app.get('port'), () => {
	console.log('Server listen on port', app.get('port'))
})