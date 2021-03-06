"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// const {routerProduct} = require('./src/product/routes/')
// const {routerChat} = require('./src/chat/routes/')
// Instanciamiento del servidor de socket
// const {Server}= require('socket.io')
// const instanceSockets = require('./src/sockets')
// Configuracion de los arhivos vista
app.set('views', './src/views');
app.set('views engine', 'ejs');
app.use(express_1.default.static('./public'));
// Seteo de la data en json
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.render('index.ejs');
});
// app.use('/', routerProduct)
// app.use('/', routerChat)
const port = process.env.PORT || 3000;
const myServer = app.listen(port);
// const io=new Server(myServer)
// instanceSockets(io)
