var db = require("../models");

module.exports = function(app) {
  app.get("/api/allMessages", function(req, res) {

    db.Contact.findAll({
    }).then(function(dbContact) {
      res.json(dbContact);
    });
  });

  app.post("/api/newContact", function(req, res) {
    db.Contact.create(req.body).then(function(dbContact) {
      res.json(dbContact);
    });
  });

};
