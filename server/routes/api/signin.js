const User = require('../../models/user.js')
const UserSession = require('../../models/userSession.js')


module.exports = (app) => {

    app.post('/api/account/signup', (req, res, next) => {
        var { body } = req;
        var { 
            username,
            password 
        } = body;

        if (!username) {
            res.end({
                success: false,
                message: 'Error - missing username'
            })
        }
        if (!password) {
            res.end({
                success: false,
                message: 'Error - invalid password'
            })
        }
        console.log("HERE IS YOUR BODY!")
        console.log(body)
        username = username.toLowerCase()

        User.find({
            username: username
        }, (error, previousUsers) => {
            if (error){
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                })    
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Username already exists'
                })
            }
            
            const newUser = new User()
            newUser.username = username
            newUser.password = newUser.generateHash(password)
            newUser.save((error, user) => {
                if (error){
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    })    
                } else if (previousUsers.length == 0) {
                    return res.send({
                        success: true,
                        message: 'Signup Successful!'
                    })
                } else { 
                        console.log("something went wrong...") 
                        console.log("Previous Users and length: ")    
                        console.log(previousUsers, previousUsers.length)}
            })

        }
        
        
        )

    })

    app.post('/api/account/signin', (req, res, next) => {
        var { body } = req;
        var { 
            username,
            password 
        } = body;

        if (!username) {
            res.end({
                success: false,
                message: 'Error - missing username'
            })
        }
        if (!password) {
            res.end({
                success: false,
                message: 'Error - invalid password'
            })
        }

        username = username.toLowerCase()

        User.find({
            username: username
        }, (error, users) => {
            if (error) {
                return res.send({
                    success: false,
                    message: 'error: server error2'
                })
            }
            if (users.length != 1) {
                console.log(req)
                return res.send({
                    success: false,
                    message: 'error: invalid1'
                })
            }
            const user = users[0]
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'error: invalid2'
                })
            }

            userSession = new UserSession()
            userSession.userId = user._id
            userSession.username = user.username
            userSession.save((error, document) => {
                if (error) {
                    return res.send({
                        success: false,
                        message: 'error: server error1'
                    })
                }
                return res.send ({
                    success: true,
                    message: 'Sign In Success!',
                    token: document._id
                })
            })
        })

    })

    app.get('/api/account/verify', (req, res, next) => {
        const { query } = req
        const { token } = query

        UserSession.find({
            _id: token,
            isDeleted: false
        }, (error, sessions) => {
            if (error) {
                return res.send({
                    success: false,
                    message: 'error: invalid token - redirect to signin page'
                })
            }
            if (sessions.length !=1){
                return res.send({
                    success: false,
                    message: 'error: session invalid - redirect to login page'
                })
            }
            else {
                console.log('here is session data')
                console.log(sessions)
                return res.json({
                    success: true,
                    userId: sessions[0].userId,
                    username: sessions[0].username,
                    message: 'Token Verified - go home'
                })
            }
        })
    })

    app.get('/api/account/logout', (req, res, next) => {
        console.log("req coming in")
        console.log(req.query.token)
        UserSession.findOneAndUpdate({
            _id: req.query.token,
            isDeleted: false
        }, {
            $set: {
                isDeleted: true
            }}, 
            null, (error, sessions) => {
            if (error) {
                return res.send({
                    success: false,
                    message: 'error: invalid token - redirect to signin page'
                })
            }
            else {
                return res.send({
                    success: true,
                    message: 'Token marked as deleted! - redirect to login page'
                })
            }
        })
    })
}