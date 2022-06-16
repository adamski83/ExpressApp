const express = require('express');
const {engine} = require('express-handlebars')
const app = express();
app.use(express.static('./public'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
const port = process.env.PORT || 3000;

const fortunes = [
    "Pokonaj swoje lęki albo one pokonają ciebie.",
    "Rzeki potrzebują źródeł.",
    "Nie obawiaj się nieznanego.",
    "Oczekuj przyjemnej niespodzianki.",
    "Zawsze szukaj prostego rozwiązania.",
];


app.get('/', (req, res) => res.render('home')
);

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about',{fortune:randomFortune})
})


app.use(((req, res) => {
    res.status(404)
    res.render('404')
}))

app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(`Express został uruchomiony pod adresem http://localhost:${port}; ` +
    `naciśnij Ctrl-C, aby zakończyć.`))
