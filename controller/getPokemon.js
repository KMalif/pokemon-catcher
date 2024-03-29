import { handleServerError, handleClientError } from "../helpers/handleError.js";
import axios from "axios";

export const getPokemon = async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
    return res.status(200).json({ message: "Success get pokemon", status: 200, data: response?.data?.results });
  } catch (error) {
    return handleServerError(res);
  }
};

export const pokemonDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return res.status(200).json({ message: "Success get detail pokemon" , status: 200, data: response?.data });
  } catch (error) {
    if (error?.response?.status === 404) {
      return handleClientError(res, 404, "Pokemon Not Found");
    } else {
      return handleServerError(res);
    }
  }
};
