import React, { memo } from 'react';
import { StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Text, View } from './Themed';
var { width } = Dimensions.get('window');
import { useRouter } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';

const PokemonListing = ({ handleNextPokemon, data }: { handleNextPokemon?: any, data: any }) => {
  const pokemonWidth = width >= 600 ? 300 : width * 0.3;
  const wrapperWidth = width >= 600 ? 200 : width * 0.3;
  const headerHeight = useHeaderHeight();
  const router = useRouter();

  function handlePokemonDetails(link: any, id: any) {
    router.push({
      pathname: "/pokemonDetails", params: {
        endPoint: link,
        imgId: id
      }
    });
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={handleNextPokemon}
        onEndReachedThreshold={0.3}
        contentContainerStyle={{ ...styles.innerContainer, marginTop: headerHeight }}
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
    </View>
  )
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

export default memo(PokemonListing)

