const { sequelize } = require("../models");
const db = require("../models");
const Customer = db.customer;
const Op = db.Sequelize.Op;

exports.findByUsernameCustomer = (req, res) => {
    const name = req.query.username;
  
    Customer.findAll({
      attributes: ['username', 'display_name'],
      where: {username: name}
    })
      .then(data => {
        if (data) {
          console.log(data);
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Customer with username=${name}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Customer with username=" + name
        });
      });
  };