import { loadData, storeData } from "../helpers/databaseHelper.js";
import { handleClientError, handleServerError } from "../helpers/handleError.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const myPokemon = async (req, res) => {
  try {
    const data = loadData();
    if (data.MyPokemon.length === 0) {
      return handleClientError(res, 404, "Your Pokemon is Empty");
    }
    return res.status(200).json({ data: data, status: "Success" });
  } catch (error) {
    return handleServerError(res);
  }
};

export const catchPokemon = async (req, res) => {
  try {
    const { name } = req.params;
    const data = loadData();
    const pokeCheck = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if (pokeCheck) {
      const probability = Math.floor(Math.random() * 10);
      if (probability % 2 == 0) {
        data["MyPokemon"].push({
          id: uuidv4(),
          name: name,
          version: 0,
        });
        storeData(data);
        return res.status(200).json({ message: "Pokemon Catch" });
      } else {
        return res.status(200).json({ message: "Pokemon Run...." });
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
