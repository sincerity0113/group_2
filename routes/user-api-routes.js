var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.users.findAll({
      include: [{
        model: db.emojis,
        as: 'umoji'
      }]
    }).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.users.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.emojis,
        as: 'umoji'
      }]
    }).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  app.post("/api/users", function(req, res) {
    db.users.create(req.body).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });


  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/users", function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });


  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's username and id
      // Sending back a password, even a hashed password, isn't a good idea
      db.users.findOne({
        where: {
          id: req.user.id
        },
        include: [{
          model: db.emojis,
          as: 'umoji'
        }]
      }).then(function(dbusers) {
        res.json(dbusers);
      });
      // res.json({
      //   username: req.user.username,
      //   id: req.user.id
      // });
    }
  });

  app.delete("/api/users/:id", function(req, res) {
    console.log(req.params.id);
    db.users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbusers) {
      res.json(dbusers);
    });
  });
};
