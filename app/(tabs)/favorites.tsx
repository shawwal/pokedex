import React from 'react';
import { useRecoilValue } from 'recoil';
import { favoritePokemonState } from '../../store/globalState'; // Update the import path accordingly
import PokemonListing from '../../components/PokemonListing'; // Import your PokemonListing component

export default function TabFavoriteScreen() {
  const favoritePokemon = useRecoilValue(favoritePokemonState);
  return <PokemonListing data={favoritePokemon}/>
}