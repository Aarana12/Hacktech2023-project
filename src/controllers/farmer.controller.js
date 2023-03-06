const { sequelize } = require("../models");
const db = require("../models");
const Farmer = db.farmer;
const Op = db.Sequelize.Op;

exports.findByUsernameFarmer = (req, res) => {
    const name = req.query.username;
  
    Farmer.findAll({
      attributes: ['username', 'farm_name'],
      where: {username: name}
    })
      .then(data => {
        if (data) {
          console.log(data);
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Cimt with username=${name}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Farmer with username=" + name
        });
      });
  };