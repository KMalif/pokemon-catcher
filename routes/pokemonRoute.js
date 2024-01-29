import express from "express";
import { getPokemon, pokemonDetail } from "../controller/getPokemon.js";
import { catchPokemon, myPokemon } from "../controller/catchPokemon.js";
import { releasePokemon, renamePokemon } from "../controller/editPokemon.js";

const router = express.Router();

router.get("/pokemon", getPokemon);
router.get("/pokemon/:id", pokemonDetail);
router.get("/my-pokemon", myPokemon);
router.post("/catch-pokemon/:name", catchPokemon);
router.put("/rename-pokemon/:id", renamePokemon);
router.delete("/release-pokemon/:id", releasePokemon);

export default router;
