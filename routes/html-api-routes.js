var db = require("../models");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app){

  app.get("/", function(req, res){
    // If the user already has an account send them to the members page
      if (req.user) {
        res.redirect("/members");
      }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", function(req, res){
    // If the user already has an account send them to the members page
      if (req.user) {
        res.redirect("/members");
      }
    res.sendFile(path.join(__dirname, "../public/login.html"))
  });

  app.get("/members", isAuthenticated, function(req, res){
    res.sendFile(path.join(__dirname, "../public/members.html"))
  });

  app.get("/chart",isAuthenticated, function(req, res){
    res.sendFile(path.join(__dirname, "../public/chart.html"))
  })

  app.get("/history", isAuthenticated, function(req, res){
    res.sendFile(path.join(__dirname, "../public/history.html"));
  });


  function findAllEmojis(){
    // GET route for getting all of the emojis
    app.get("/mood-track",isAuthenticated, function(req, res) {
      var query = {};
    if (req.query.id) {
      query.id = req.query.id;
    }

    db.emojis.findAll({
      where: query,
    }).then(function(dbemoji) {
      var sortedEmotion = dbemoji.sort(function(a, b){
        return a.polarity-b.polarity
    })

    var positivePolarity = [];
    var neutralPolarity =[];
    var negativePolarity = [];

    for(var i = 0; i < sortedEmotion.length; i++){
        var emojiPolarity = sortedEmotion[i].polarity;
        if(emojiPolarity > 0){
            positivePolarity.push(dbemoji[i]);
        }else if(emojiPolarity == 0){
            neutralPolarity.push(dbemoji[i]);
        }else{
            negativePolarity.push(dbemoji[i]);
        }
    }
    var data = {
        positivePolarityEmojis: positivePolarity,
        neutralPolarityEmojis: neutralPolarity,
        negativePolarityEmojis: negativePolarity,
        title: "Emotion Tracker"
    };

      res.render("index",data)
      });
    });
    }
    findAllEmojis();

    console.log();
    function findUserEmoji(){
      app.get("/mood-track", isAuthenticated,function(req, res) {

        db.users.findAll({
          include: [{
            model: db.emojis,
            as: 'umoji'
          }]
        }).then(function(dbusers) {

          var data = {
             Emojis: dbusers,

        };
          res.render("index", data);
        });
        });
      }
      findUserEmoji()

}; //end of module.exports





























































// var db = require("../models");

// // Requiring path to so we can use relative routes to our HTML files
// var path = require("path");

// // Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function(app) {
// function findAllEmojis(){
// // GET route for getting all of the emojis
// app.get("/", function(req, res) {
//   var query = {};
// if (req.query.id) {
//   query.id = req.query.id;
// }

// db.emojis.findAll({
//   where: query,
// }).then(function(dbemoji) {
//   var sortedEmotion = dbemoji.sort(function(a, b){
//     return a.polarity-b.polarity
// })

// var positivePolarity = [];
// var neutralPolarity =[];
// var negativePolarity = [];


// for(var i = 0; i < sortedEmotion.length; i++){
//     var emojiPolarity = sortedEmotion[i].polarity;
//     if(emojiPolarity > 0){
//         positivePolarity.push(dbemoji[i]);
//     }else if(emojiPolarity == 0){
//         neutralPolarity.push(dbemoji[i]);
//     }else{
//         negativePolarity.push(dbemoji[i]);
//     }
// }
// var data = {
//     positivePolarityEmojis: positivePolarity,
//     neutralPolarityEmojis: neutralPolarity,
//     negativePolarityEmojis: negativePolarity,
//     title: "Emotion Tracker"
// };

//   res.render("login",data)
//   });
// });
// }
// findAllEmojis();

// console.log();
// function findUserEmoji(){
//   app.get("/", function(req, res) {

//     db.users.findAll({
//       include: [{
//         model: db.emojis,
//         as: 'umoji'
//       }]
//     }).then(function(dbusers) {

//       var data = {
//          Emojis: dbusers,
//         // neutralPolarityEmojis: neutralPolarity,
//         // negativePolarityEmojis: negativePolarity,
//         // title: "Emotion Tracker"

//     };
//       res.render("index", data);
//     });
//     });
//   }
//   findUserEmoji()


//   app.get("/", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
//   });

//   app.get("/login", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/members", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/members.html"));
//   });
// }



// // // GET route for getting all of the emojis
// // router.get("/", function(req, res) {
// //   var query = {};
// //   if (req.query.id) {
// //     query.id = req.query.id;
// //   }

// //   db.emojis.findAll({
// //     where: query,
// //   }).then(function(dbemoji) {
// //     var sortedEmotion = dbemoji.sort(function(a, b){
// //       return a.polarity-b.polarity
// //   })

// //   var positivePolarity = [];
// //   var neutralPolarity =[];
// //   var negativePolarity = [];


// //   for(var i = 0; i < sortedEmotion.length; i++){
// //       var emojiPolarity = sortedEmotion[i].polarity;
// //       if(emojiPolarity > 0){
// //           positivePolarity.push(dbemoji[i]);
// //       }else if(emojiPolarity == 0){
// //           neutralPolarity.push(dbemoji[i]);
// //       }else{
// //           negativePolarity.push(dbemoji[i]);
// //       }
// //   }
// //   var data = {
// //       positivePolarityEmojis: positivePolarity,
// //       neutralPolarityEmojis: neutralPolarity,
// //       negativePolarityEmojis: negativePolarity,
// //       title: "Emotion Tracker"
// //   };

// //     res.render("index",data)
// //   });
// // });
