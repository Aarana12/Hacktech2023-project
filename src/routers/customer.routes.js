module.exports = app => {
    const customer = require("../controllers/customer.controller.js");
    var router = require("express").Router();
    
    router.get("/", customer.findByUsernameCustomer);

    app.use('/api/customer', router);
  };