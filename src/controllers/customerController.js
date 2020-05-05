const controller={};

controller.list=(req,res)=>{
  req.getConnection((err,conn)=>{
    conn.query('SELECT * FROM cliente',(err,cliente)=>{
      if(err){
        res.send({
                 Cve_Error: -1,
                 Cve_Mensaje: 'data not found'
             });
      }
     res.send(cliente);
    });
  });
};

controller.save=(req,res)=>{

  var Fecha_Creacion = new Date();
  var Fecha_Actualizacion = new Date();
  const data=req.body;
  data.Fecha_Creacion=Fecha_Creacion;
  data.Fecha_Actualizacion=Fecha_Actualizacion;
  console.log(data);
req.getConnection((err,con)=>{
  con.query('INSERT INTO cliente set ?',[data],(err, customer)=>{
    if(err){
      res.send({
               Cve_Error: -1,
               Cve_Mensaje: 'DUPLICATED_VALUES'
           });
    }
   res.send({
            Cve_Error: 0,
            Cve_Mensaje: 'Client created'
        });
  });
});
}



controller.edit=(req,res)=>{
    const {id}= req.params;
    req.getConnection((err,con)=>{
      con.query('SELECT * FROM customer WHERE id=?',[id],(error,customer)=>{
        res.render('customer_edit',{
          data:customer[0]
        });
      });
    });
}

controller.update=(req,res)=>{
  const {id}= req.params;
  const newCostomer=req.body;
  req.getConnection((err,con)=>{
    con.query('UPDATE customer set? WHERE id= ?',[newCostomer,id],(err,row)=>{
      res.redirect('/');
    });
  });
};

controller.eliminar=(req,res)=>{
  var Cliente_ID= req.params.Cliente_ID;
  console.log(Cliente_ID);
req.getConnection((error,con)=>{
  con.query('DELETE FROM cliente WHERE Cliente_ID=?',[Cliente_ID],(error,customer)=>{
    if(error){
      res.send({
               Cve_Error: -1,
               Cve_Mensaje: 'error usuario no existe'
           });
    }
   res.send({
            Cve_Error: 0,
            Cve_Mensaje: 'Client deleted'
        });
  })
})
};

module.exports=controller;
