
var async = require('async')

module.exports = function (app, passport, auth) {

    // user routes
    var users = require('../app/controllers/users')
    app.get('/signin', users.signin)
    app.get('/signup', users.signup)
    app.get('/signout', users.signout)
    app.post('/users', users.create)
    app.post('/users/session', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: 'Invalid email or password.' }), users.session)
    app.get('/users/me', users.me)
    app.get('/users/:userId', users.show)

    // restaurant routes
    var restaurants = require('../app/controllers/restaurants')
    app.get('/restaurants', restaurants.all)
    app.post('/restaurants', auth.requiresLogin, restaurants.create)
    app.put('/restaurants', auth.requiresLogin, restaurants.update)
    app.del('/restaurants', auth.requiresLogin, restaurants.destroy)
  
    app.param('userId', users.user)
  
    // home route
    var index = require('../app/controllers/index')
    app.get('/', index.render)}