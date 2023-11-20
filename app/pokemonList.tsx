import React, { useEffect, useState, memo } from 'react';
import { StyleSheet, Alert, Image, TouchableOpacity, Dimensions, FlatList, useColorScheme } from 'react-native';
import { Text, View } from '../components/Themed';
import Loading from 'components/Loading';
import axios from 'axios';
import { getPokemonByRegion } from 'utils/getPokemonByRegion';
import { capitalizeFirstLetter } from 'utils/commonUtils';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { BlurView } from 'expo-blur';
import { useHeaderHeight }from '@react-navigation/elements';

var { width } = Dimensions.get('window');

function PokemonListScreen() {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextApi, setNextApi] = useState('');
  const params = useLocalSearchParams();
  const router = useRouter();
  const { name } = params;
  const [loading, setLoading] = useState(true);
  const pokemonWidth = width >= 600 ? 300 : width * 0.3;
  const wrapperWidth = width >= 600 ? 200 : width * 0.3;
  const colorScheme = useColorScheme();
  const headerHeight = useHeaderHeight();

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

  function handlePokemonDetails(link: any, id: any) {
    router.push({
      pathname: "/pokemonDetails", params: {
        endPoint: link,
        imgId: id
      }
    });
  }

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
          <FlatList
            data={pokemonList}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            onEndReached={handleNextPokemon}
            onEndReachedThreshold={0.3}
            contentContainerStyle={{...styles.innerContainer, marginTop: headerHeight}}
            maxToRenderPerBatch={10}
            removeClippedSubviews={true}
            renderItem={({ item }) => {
              const urlString = String(item.url);
              const pokemonId = urlString.slice(-7).replace(/\D|\//g, "");
              const pokemonImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonId + '.png';
              return (
                <TouchableOpacity
                  onPress={() => handlePokemonDetails(item.url, pokemonId)}
                  style={{ ...styles.pokemonWrapper, width: wrapperWidth }}
                  key={item.name}
                >
                  <Image
                    style={{ ...styles.pokemonImg, width: pokemonWidth }}
                    source={{ uri: pokemonImage }}
                  />
                  <Text style={styles.titleCase} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                </TouchableOpacity>
              )
            }}
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
  },
  innerContainer: {
    width: '100%',
  },
  titleCase: {
    textTransform: 'capitalize'
  },
  pokemonWrapper: {
    margin: 3,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  pokemonImg: {
    height: 110,
    resizeMode: 'contain',
  },
});

export default memo(PokemonListScreen)