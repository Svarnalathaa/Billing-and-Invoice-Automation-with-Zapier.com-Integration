// googleOAuthService.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID:'687047235803-2lng5btjv95jakn3nnnqcmeapltt61j1.apps.googleusercontent.com',
    clientSecret: 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,
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        user = new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value
        });
        await user.save();
      }

      return done(null, user);
    } catch (err) {
      console.error(err);
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    console.error(err);
    done(err);
  }
});

module.exports = passport;
