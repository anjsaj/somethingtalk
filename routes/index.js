var express = require('express');
var passport = require('passport');
var models = require('../models/schema');
var User = models.User;
var Language = models.Language;
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/languages', function (req, res) {
      Language.find( { active: true}, 'lang' , function(err, languages) {
        res.json(languages);
  });
});

router.get('/signup', function(req, res) {
    res.render('signup', { });
});

router.post('/signup', function(req, res, next) {
    
    User.register(new User({ username : req.body.username,
        email: req.body.email,
        phone : req.body.phone,
        usertype : req.body.usertype,
        languages : req.body.languages
        }), req.body.password, function(err, user) {
        if (err) {
          return res.render("signup", {info: "Sorry. That username already exists. Try again."});
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});


router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res, next) {
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', function(req, res, next) {
    req.logout();
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;
