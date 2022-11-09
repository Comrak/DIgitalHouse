const { json } = require('express');
const path = require('path');
const renderHome = (req, res) => {
        
return res.render('home')
}

const renderAbout = (req, res) => {
    return res.render('about')
}

const renderRegister = (req, res) => {
    return res.render('register')
}

const renderRegisterPost = (req, res) => {
    return res.render('home')
}

const renderLogin = (req, res) => {
    return res.render('login')
}

const renderCarrito = (req, res) => {
    return res.render('carritoCompras')
}

const renderCarritoPost = (req, res) => {
    return res.render('home')
}




module.exports = {  renderHome,
                    renderAbout,
                    renderRegister,
                    renderLogin,
                    renderCarrito,
                    renderCarritoPost,
                    renderRegisterPost
                }       