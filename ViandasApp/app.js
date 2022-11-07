const express = require('express');
const app = express();
const path = require('path');
const PUBLICFOLDER = path.resolve('public')
const routerMain = require('./routers/mainRouter');

// Settings post requirement in app
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// calling methodOverride
// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));




app.use(express.static(PUBLICFOLDER))

app.set('view engine', 'ejs');


const numeroPuerto = 3000;
app.listen(numeroPuerto, ()=>{
    console.log('Servidor funcionando en el puerto ' + numeroPuerto);
})

app.use('/', routerMain);