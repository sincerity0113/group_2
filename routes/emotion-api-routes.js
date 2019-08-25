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
  app.get("/api/emojis", function(req, res) {
    var query = {};
    if (req.query.id) {
      query.id = req.query.id;
    }

    db.emojis.findAll({
      where: query,
    }).then(function(dbemoji) {
      var data = {
        emojis : dbemoji,
        title: "Emotion Tracker"
      }
      res.json(dbemoji);
    });
  });

  // Get route for retrieving a single emoji
  app.get("/api/emojis/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.emojis.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbemojis) {
      res.json(dbemojis);
    });
  });

  /*
  // POST route for saving a new emoji
  app.post("/api/emojis", function(req, res) {
    db.emojis.create(req.body).then(function(dbemojis) {
      res.json(dbemojis);
    });
  });

  // DELETE route for deleting emojis
  app.delete("/api/emojis/:id", function(req, res) {
    db.emojis.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbemojis) {
      res.json(dbemojis);
    });
  });

  // PUT route for updating emojis
  app.put("/api/emojis", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbemojis) {
      res.json(dbemojis);
    });
  });*/
};
