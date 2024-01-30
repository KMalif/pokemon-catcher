import { loadData, storeData } from "../helpers/databaseHelper.js";
import { handleClientError, handleServerError } from "../helpers/handleError.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const myPokemon = async (req, res) => {
  try {
    const data = loadData();
    if (data?.MyPokemon?.length === 0) {
      return res.status(200).json({ message: "You haven't pokemon yet", status: 200, data: data?.MyPokemon });
    }
    return res.status(200).json({message: "Success get all pokemon", status: 200, data: data?.MyPokemon });
  } catch (error) {
    return handleServerError(res);
  }
};

export const catchPokemon = async (req, res) => {
  try {
    const { name } = req?.params;
    const data = loadData();
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if (pokemon) {
      const probability = Math.floor(Math.random() * 10);
      if (probability % 2 == 0) {
        data["MyPokemon"].push({
          id: uuidv4(),
          name: name,
          version: 0
        });
        storeData(data);
        return res.status(200).json({ message: "Success catch pokemon" });
      } else {
        return res.status(200).json({ message: "Failed catch pokemon" });
      }
    }
  } catch (error) {
    if (error.response.status === 404) {
      return handleClientError(res, 404, "Pokemon Not Found");
    } else {
      return handleServerError(res);
    }
  }
};
