// Require aclocks models
var db = require("../models");


module.exports = function(app) {
  // GET routes for finding all messages
  app.get("/api/allMessages", function(req, res) {

    db.Contact.findAll({})
    .then(function(dbContact) {
      res.json(dbContact);
    });
  });
  // POST route for saving a new message
  app.post("/api/newMessage", function(req, res) {
    console.log(req.body);

    db.Contact.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
    })
      .then(function(dbContact) {
        res.json(dbContact);
      });
    
  });

};
