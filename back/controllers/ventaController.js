var Venta = require('../models/venta');
var Dventa = require('../models/dventa');

const registro_compra_cliente = async function(req,res){
    if(req.user){
        
        var data = req.body;
        var detalles = data.detalles;
        var d_detalles = [];

        let venta = await Venta.create(data);

        detalles.forEach(async element => {
            await Dventa.create(element);
            d_detalles.push(element);
        });

        res.status(200).send({venta:venta,dventa:d_detalles});
    }else{
        res.status(500).send({ message: 'NoAccess' });
    }
}

module.exports = {
    registro_compra_cliente
}