
import { View } from '../../components/Themed';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import axios from 'axios';
import PokemonRegions from 'constants/PokemonRegions';
import { useRouter } from 'expo-router';
import { useHeaderHeight }from '@react-navigation/elements';

const Home = () => {
  const headerHeight = useHeaderHeight();
  const [regions, setRegions] = useState([]);
  const { width } = Dimensions.get('window');
  const router = useRouter();
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

  const handleNavigate = (item: any, index: number) => {
    router.push({ pathname: "/pokemonList", params: { name: item.name, url: item.url, number: index + 1 } });
  }

  const numColumns = width >= 600 ? 3 : 2; // 3 columns on tablet and desktop, 2 columns on mobile
  const posterWidth = width >= 600 ? 200 : 180;

  const renderGenerationItem = ({ item, index }) => (
    item.name === 'hisui' ? <View /> :
      <TouchableOpacity
        style={styles.generationItem}
        onPress={() => handleNavigate(item, index)}
      >
        {/* @ts-ignore */}
        <Image source={PokemonRegions[item.name]} style={{ ...styles.generationImage, maxWidth: posterWidth }} />
      </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={regions}
        keyExtractor={(item) => item.name}
        numColumns={numColumns}
        renderItem={renderGenerationItem}
        contentContainerStyle={{...styles.innerContainer, paddingTop: headerHeight, paddingBottom: headerHeight }}
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
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  generationImage: {
    height: 300, // Set a fixed height for the images
    borderRadius: 8,
  },
  generationText: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default Home;
