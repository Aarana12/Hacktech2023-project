module.exports = app => {
    const farmer = require("../controllers/farmer.controller.js");
    var router = require("express").Router();
    
    router.get("/", farmer.findByUsernameFarmer);

    app.use('/api/farmer', router);
  };