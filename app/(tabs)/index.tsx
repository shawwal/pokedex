
import { View } from '../../components/Themed';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import axios from 'axios';
import PokemonRegions from 'constants/PokemonRegions';
import { useRouter } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import Head from "expo-router/head";

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
    <>
      <Head>
        <meta name="description" content="Discover, capture, and learn about every Pokémon with our React Native-powered Pokédex app! Seamlessly explore on web, iOS, and Android. Your journey to become a Pokémon Master starts here – download now!" />
        <meta name="keywords" content="Pokédex Pro, Pokédex app, React Native, Pokémon Master, Cross-platform, Capture Pokémon, Explore Pokémon world, iOS, Android, web" />
        <meta name="author" content="Shawwal Muhammad" />
        <link rel="canonical" href="https://pokedex.shawwals.com" />

        <meta property="og:title" content="Pokédex App: Explore, Capture, and Learn with React Native" />
        <meta property="og:description" content="Discover the Pokémon universe with our advanced Pokédex app. Seamlessly explore, capture, and learn on web, iOS, and Android. Download now for the ultimate Pokémon Master experience!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pokedex.shawwals.com" />
        <meta property="og:image" content="https://pokedex.shawwals.com/assets/assets/images/icon.png" />
        <meta property="og:image:alt" content="Pokédex App Interface" />
        <meta property="og:site_name" content="Pokédex Pro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pokédex App: Explore, Capture, and Learn with React Native" />
        <meta name="twitter:description" content="Discover the Pokémon universe with our advanced Pokédex app. Seamlessly explore, capture, and learn on web, iOS, and Android. Download now for the ultimate Pokémon Master experience!" />
        <meta name="twitter:image" content="https://pokedex.shawwals.com/assets/assets/images/icon.png" />
        <title>Pokédex Pro: Explore, Capture, and Learn with React Native</title>
      </Head>
      <View style={styles.container}>
        <FlatList
          data={regions}
          keyExtractor={(item) => item.name}
          numColumns={numColumns}
          renderItem={renderGenerationItem}
          contentContainerStyle={{ ...styles.innerContainer, paddingTop: headerHeight, paddingBottom: headerHeight }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
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
