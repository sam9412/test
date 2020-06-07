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


controller.save = (req, res) => {
  const{name,address,phone} = req.body;
  console.log("es el save")
  console.log(req.body)
  req.getConnection((err, conn) => {
     conn.query('INSERT INTO customer set ?', {name,address,phone}, (err, cust) => {
      console.log("cutomes")
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  console.log(id);
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
