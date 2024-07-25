import express from "express";
import connect from "./src/utils/connectMongoDb.js";
import router from "./src/routes/index.js";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// app.use(
//   session({
//     secret: process.env.SESSISON,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         let user = await userSchema.findOne({ email: profile._json.email });
//         if (!user) {
//           user = await userSchema.create({
//             email: profile._json.email,
//             username: profile._json.name,
//             image_url: profile._json.picture,
//           });
//         }
//         return done(null, user);
//       } catch (err) {
//         return done(err);
//       }
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await userSchema.findById(id);
//     done(null, user);
//   } catch (err) {
//     done(err);
//   }
// });

// app.use(passport.initialize());
// app.use(passport.session());

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/" }),
//   (req, res) => {
//     res.redirect(`http://localhost:5173/login-success/${req.user?.id}`);
//   }
// );

app.use("/api", router);

app.listen(3000, async () => {
  await connect();
  console.log("http://localhost:3000");
});
