let express = require("express"),
    app = express(),
    methodOverride = require("method-override");
const PORT = process.env.PORT || 5000;
const userController = require("./controllers/userController");
let mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(methodOverride());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

let router = express.Router();
app.use(router);

router.route('/auth')
    .post(userController.getUserToken);
router.route('/checkAuth')
    .get(userController.checkAuth);
router.route('/users')
    .get(userController.findAllUsers)
    .post(userController.addUser);

router.route('/users/:id')
    .get(userController.findById)
    .delete(userController.deleteUser)
    .put(userController.updateUser);
console.log(process.env.DB_STRING);
mongoose.connect("mongodb://blas:admin@mongo_db:27017/gymtabs", { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true },function(err, res) {
    if (err) {
        console.log('Error en conexion a base de datos ' + err);
    } else {
        console.log('Conectado a BD')
    }
});
app.listen(PORT, function() {
    console.log("Node server running on http://localhost:"+PORT);
});