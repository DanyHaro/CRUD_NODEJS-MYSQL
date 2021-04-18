const controller = {};

//PETICIONES A LA BD

//  REQUEST: RECIBES  RESPONSE: MUESTRAS O ENVIAS

//METODO LISTAR
controller.listar = (request, response) => {

    request.getConnection((err, connection) => {
        connection.query('SELECT * FROM comprador', (err, respuesta) => {
            if (err) {
                response.json(err);
            }
            console.log(respuesta);
            response.render('comprador', { //renderisando al archivo comprador.ejs, y cuando renderisamos estamos dando datos
                data: respuesta //pasando los datos a la vista. comprador.ejs 
            });
        })
    });

};



//METODO INSERTAR
controller.guardar = (request, response) => {
    console.log(request.body, 'controller line:23');

    const dataFormulario = request.body;
    request.getConnection((err, connection) => {
        connection.query('INSERT INTO COMPRADOR set ? ', [dataFormulario], (err, respuesta) => { //enviamos datos que son [dataFormulario] a la BD
            console.log(respuesta, " ENVIADO !");
            response.redirect('/');
        })
    });
};


//METODO ELIMINAR
controller.eliminar = (request, response) => {
    console.log(request.params.id, 'SOY EL ID'); //imprimiendo la propiedad id

    request.getConnection((error, conexion) => {
        conexion.query('DELETE FROM COMPRADOR WHERE ID = ?', request.params.id, (error, respuesta) => {
            console.log(respuesta); //"respuesta" muestra las filas afectadas despues de la petición
            response.redirect('/');
        });
    });
};




//MOSTRANDO 1 ITEM PARA ACTUALIZAR
controller.editar = (request, response) => {
    console.log(request.params.id);

    request.getConnection((error, conexion) => {
        conexion.query('SELECT * FROM COMPRADOR WHERE ID = ?', request.params.id, (error, respuesta) => {
            console.log(respuesta, "EDITAR"); //obtenemos un arreglo
            let persona = respuesta[0];
            response.render('comprador_editar', {
                    data: persona
                }) //AL RENDERISAR NOS DIRIGIMOS AL ARCHIVO "comprador_editar.ejs" y mandamos datos
        });
    });
};


//METODO ACTUALIZAR
controller.savechanges = (request, response) => {
    console.log(request.params.id);
    console.log(request.body, "im body");
    const nuevaPersona = request.body;

    request.getConnection((error, conexion) => {
        conexion.query("UPDATE COMPRADOR SET ? WHERE ID = ?", [nuevaPersona, request.params.id], (error, respuesta => {
            response.redirect('/');
        }));
    })
};

module.exports = controller