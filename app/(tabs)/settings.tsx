import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRecoilState } from 'recoil';
import { favoritePokemonState } from '../../store/globalState'; // Update the import path accordingly
import { Text, View } from '../../components/Themed';

export default function TabSettingsScreen() {
  const [favoritePokemon, setFavoritePokemon] = useRecoilState(favoritePokemonState);

  const clearFavorites = () => {
    Alert.alert(
      'Clear All Favorites',
      'Are you sure you want to delete all favorite Pokemon?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setFavoritePokemon([]);
            Alert.alert('Favorites Cleared', 'All favorite Pokemon have been cleared.');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Settings</Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/* Apple settings style content */}
      {/* Add your settings components here */}

      {/* Button to clear all favorite Pokemon */}
      <TouchableOpacity style={styles.clearButton} onPress={clearFavorites}>
        <Text style={styles.clearButtonText}>Clear All Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: '80%',
  },
  clearButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
