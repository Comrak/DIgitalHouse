const express = require('express');
const router = express.Router();
const path = require('path');
const { body } = require('express-validator');
// importar controlador
const userController = require('../controllers/userController');
const validations = require('../middlewares/uservalidations');
const addressValidations = require('../middlewares/addressValidation');
const guestMiddleware = require('../middlewares/guestMiddleware');



const multer = require("multer");
const authMiddleware = require('../middlewares/authMiddleware');
// ************************** Multer **************************
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('public/img/users'));
    },
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
});
const upload = multer({ storage });


// *********************** Routers ***************************

// Formulario de registro
router.get('/register', guestMiddleware,userController.register);

// Procesar el registro
router.post('/register',upload.single('avatar'),validations, userController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware,userController.login);

// Procesar el login
router.post('/login', userController.loginProcess);
// Perfil de Usuario
router.get('/profile', authMiddleware,userController.profile);

// formulario para agregar direcciones
router.get('/address', userController.address);
router.post('/address',addressValidations, userController.processAddress);

// Procesar el LogOut
router.get('/logout', userController.logout);

// formulario de carrito de compras
router.get('/carrito', userController.carrito);
router.post('/carrito', userController.processCarrito);

// *********************** API REST ***************************
router.get('/list', userController.userList);
router.get('/cities', userController.citiesList);


module.exports= router;