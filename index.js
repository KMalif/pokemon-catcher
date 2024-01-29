import express, { Router } from "express";
import joi from "joi";
import fs from "fs";
import routerPokemon from "./routes/pokemonRoute.js";
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routerPokemon);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
