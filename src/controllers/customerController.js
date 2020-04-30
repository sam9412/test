const controller={};

controller.list=(req,res)=>{
  req.getConnection((err,conn)=>{
    conn.query('SELECT * FROM customer',(err,customers)=>{
      if(err){
        res.json(err);
      }
      console.log(customers);
      res.render('customers',{
        data:customers
      });
    });
  });
};

controller.save=(req,res)=>{
  const data=req.body;
req.getConnection((err,con)=>{
  con.query('INSERT INTO customer set ?',[data],(err, customer)=>{
    res.redirect('/');
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

controller.delete=(req,res)=>{
  const {id}= req.params;
req.getConnection((error,con)=>{
  con.query('DELETE FROM customer WHERE id=?',[id],(error,rows)=>{
    res.redirect('/');
  })
})
}

module.exports=controller;
