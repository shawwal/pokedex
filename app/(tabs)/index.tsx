
import { View, Text } from '../../components/Themed';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import axios from 'axios';
import PokemonRegions from 'components/PokemonRegions';

const Home = ({ navigation }) => {
  const [regions, setRegions] = useState([]);
  const { width } = Dimensions.get('window');

  const numColumns = width >= 600 ? 3 : 2;
  const posterWidth = width >= 600 ? 200 : 180;

  useEffect(() => {
    const fetchRegions = async () => {

      try {
        const response = await axios.get('https://pokeapi.co/api/v2/region');
        setRegions(response.data.results);
      } catch (error) {
        console.error('Error fetching region:', error);
      }
    };

    fetchRegions();
  }, []);

  const handleNavigate = (item: any) => (
    console.log('item', item)
    // navigation.navigate('PokemonList', { region: item })
  )

  const renderRegionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.generationItem}
      onPress={() => handleNavigate(item)}
    >
      {/* @ts-ignore */}
      <Image source={PokemonRegions[item.name]} style={{...styles.gnerationImage, maxWidth: posterWidth}} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={regions}
        keyExtractor={(item) => item.name}
        numColumns={numColumns}
        renderItem={renderRegionItem}
        contentContainerStyle={styles.innerContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '100%',
    maxWidth: 700, // Maximum width for desktop
  },
  generationItem: {
    margin: 3,
  },
  gnerationImage: {
    height: 300,
    borderRadius: 8,
  }
});

export default Home;