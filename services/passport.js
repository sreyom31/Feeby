const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require('../models/User')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            console.log("User- ", user)
            done(null, user)
        })
})

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/auth/google/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id})
                .then((existingUser) => {
                    if (existingUser) {
                        done(null, existingUser)
                    } else {
                        new User({googleId: profile.id}).save()
                            .then(user => done(null, user))
                    }
                })
        }
    )
);
