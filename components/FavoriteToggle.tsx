import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { favoritePokemonState } from './../store/globalState'; // Import your Recoil file

const FavoriteToggle = ({ pokemonName, pokemonUrl }) => {
  const [isFavorite, setIsFavorite] = useRecoilState(favoritePokemonState);
  const toggleFavorite = () => {
    setIsFavorite((prevFavorites) => {
      // Check if the array is empty
      if (prevFavorites.length === 0) {
        // Add the Pokemon if the array is empty
        return [{ name: pokemonName, url: pokemonUrl }];
      }

      if (prevFavorites.some((pokemon) => pokemon.name === pokemonName)) {
        // Remove the Pokemon if it exists
        return prevFavorites.filter((pokemon) => pokemon.name !== pokemonName);
      } else {
        // Add the Pokemon if it doesn't exist
        return [...prevFavorites, { name: pokemonName, url: pokemonUrl }];
      }
    });
  };

  return (
    <TouchableOpacity onPress={toggleFavorite}>
      {isFavorite.some((pokemon: any) => pokemon.name === pokemonName) ? (
        <Ionicons name="star" size={37} color="#FFD700" />
      ) : (
        <Ionicons name="star-outline" size={37} color="#8E8E93" />
      )}
    </TouchableOpacity>
  );
};

export default FavoriteToggle;
