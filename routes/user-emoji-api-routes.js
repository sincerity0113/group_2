// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the emojis
  app.get("/api/useremojis", function(req, res) {
    var query = {};
    console.log(req)
    if (req.query.id) {
      query.id = req.query.id;
    }

    db.user_emojis.findAll({
      where: query
    }).then(function(dbUserEmojis) {
      res.json(dbUserEmojis);
    });
  });

  // Get route for retrieving a single emoji
  app.get("/api/useremojis/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.user_emojis.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUserEmojis) {
      res.json(dbUserEmojis);
    });
  });


  // POST route for saving a new useremojis
  app.post("/api/useremojis", function(req, res) {
    db.user_emojis.create(req.body).then(function(dbUserEmojis) {
      res.json(dbUserEmojis);
    });
  });

  // DELETE route for deleting useremojis
  app.delete("/api/useremojis/:id", function(req, res) {
    db.user_emojis.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUserEmojis) {
      res.json(dbUserEmojis);
    });
  });

  // PUT route for updating emojis
  app.put("/api/useremojis", function(req, res) {
    db.user_emojis.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbUserEmojis) {
      res.json(dbUserEmojis);
    });
  });
};
