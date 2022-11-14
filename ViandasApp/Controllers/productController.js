
const path = require('path');
const fs = require('fs');
const productos = JSON.parse(fs.readFileSync('./models/productos.json', 'utf8'));



const renderProductDetails = (req, res,) => {
    return res.render('products/productDetails',{jsProductos:productos})
}

const renderDetailId= (req, res) => {
    const productId = req.params.id;
    const productToFind = productos.find((product) => product.id == productId);
    if (productToFind == undefined) {
      return res.send("No existe el producto");
    } else {
        return res.render('products/detailId', {jsProductos:productos, req:req} )
    }
  }


const renderProductManagement = (req, res) => {
   return res.render('products/productManagement')
}

const renderproductRegistration = (req, res) => {
    const id = productos[productos.length - 1].id + 1 
    const newProduct = {
        "id": id,
        "imagen": "../img/productos/"+req.file.originalname,
        "prices": req.body.price,
        "name": req.body.name,
        "description": req.body.description,
        "tags": (req.body.keywords).split(";")
    }
    productos.push(newProduct);
    let data = JSON.stringify(productos);
    fs.writeFileSync('./models/productos.json', data);

    return res.render('products/productRegistration')
}

const renderProductEdit = (req, res) => {
    return res.render('products/productEdit', {jsProductos:productos, req:req} )
}

module.exports = { 
    renderProductDetails,
    renderDetailId,
    renderProductManagement,
    renderproductRegistration,
    renderDetailId,
    renderProductEdit
}