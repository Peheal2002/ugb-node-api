const express = require("express");
const sequelize = require("./database/database.js");
const heroRoutes = require("./routes/heroes.routes.js");
const Hero = require("./models/Hero.js");
const Movie = require("./models/Movie.js");

const app = express();


Hero.belongsToMany(Movie, { through: "HeroMovies" });
Movie.belongsToMany(Hero, { through: "MoviesHero" });
app.use("/heroes", heroRoutes);

sequelize.sync()
 .then(() => { })
 //    ^ É a mesma coisa que isso -> .then(function() => {})
 .catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
  })
module.exports = app;