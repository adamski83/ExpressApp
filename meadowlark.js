const express = require('express');
const {engine} = require('express-handlebars')
const app = express();
app.use(express.static('./public'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
const fortune = require('./lib/fortune')
const handlers = require('./lib/handler')
const port = process.env.PORT || 3000;



app.get('/',handlers.home)
app.get('/about',handlers.about)
app.use(handlers.notFound)
app.use(handlers.serverError)

app.listen(port, () => console.log(`Express został uruchomiony pod adresem http://localhost:${port}; ` +
    `naciśnij Ctrl-C, aby zakończyć.`))
