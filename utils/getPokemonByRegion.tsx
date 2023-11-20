// api.js
import axios from 'axios';

const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2';

// Function to get Pokémon by custom offset for each region
export const getPokemonByRegion = async (region) => {
  try {
    let offset = 0;

    switch (region.toLowerCase()) {
      case 'kanto':
        offset = 0;
        break;
      case 'johto':
        offset = 151; 
        break;
      case 'hoenn':
        offset = 251; 
        break;
      case 'sinnoh':
        offset = 386;
        break;
      case 'unova':
        offset = 493; 
        break;
      case 'kalos':
        offset = 649; 
        break;
      case 'alola':
        offset = 721;
        break;
      case 'galar':
        offset = 809; 
        break;
      case 'paldea':
        offset =  905;
        break;
      // Add more cases for additional regions if needed
      default:
        return [];
    }

    const response = await axios.get(`${POKEMON_API_BASE_URL}/pokemon`, {
      params: {
        offset,
        limit: 20, // Adjust the limit as needed
      },
    });
    const pokemonData = response.data;

    // Additional logic if you need to fetch more details for each Pokémon
    // e.g., fetch details for each Pokémon using their URLs

    return pokemonData;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw error;
  }
};
