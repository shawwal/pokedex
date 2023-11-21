import React, { useEffect, useState, memo } from 'react';
import { StyleSheet, Alert, useColorScheme } from 'react-native';
import { View } from '../components/Themed';
import Loading from 'components/Loading';
import axios from 'axios';
import { getPokemonByRegion } from 'utils/getPokemonByRegion';
import { capitalizeFirstLetter } from 'utils/commonUtils';
import { useLocalSearchParams, Stack } from 'expo-router';
import { BlurView } from 'expo-blur';
import PokemonListing from '../components/PokemonListing';


function PokemonListScreen() {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextApi, setNextApi] = useState('');
  const params = useLocalSearchParams();
  const { name } = params;
  const [loading, setLoading] = useState(true);
  const colorScheme = useColorScheme();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonByRegion(name);
        setPokemonList(data?.results);
        setNextApi(data?.next);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  function handleNextPokemon() {
    axios({
      url: nextApi,
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        if (response.data.next != null) {
          const nextResult = [...pokemonList, ...response.data.results] as any;
          setPokemonList(nextResult);
          setNextApi(response.data.next);
        } else {
          Alert.alert('No more Pokemon available at the moment');
        }
      }
    }).catch((error) => {
      Alert.alert('Something went wrong', error);
    })
  }

  return (
    <>
      <Stack.Screen
        options={{
          // @ts-ignore
          headerTitle: capitalizeFirstLetter(params.name),
          headerTransparent: true,
          headerBackground: () => (
            <BlurView tint={colorScheme} intensity={100} style={StyleSheet.absoluteFill} />
          ),
        }}
      />
      <View style={styles.container}>
        {pokemonList.length === 0 || loading ? <Loading /> :
        <PokemonListing
          handleNextPokemon={handleNextPokemon}
          data={pokemonList}
        />
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default memo(PokemonListScreen)