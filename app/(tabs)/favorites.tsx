import React from 'react';
import { favoritePokemonState } from '../../store/globalState';
import PokemonListing from '../../components/PokemonListing';
import { Alert, Pressable, useColorScheme } from 'react-native';
import { useRecoilState } from 'recoil';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabFavoriteScreen() {
  const colorScheme = useColorScheme();
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

  return <>
    <Stack.Screen
      options={{
        // @ts-ignore
        headerRight: () => (
          <Pressable onPress={() => clearFavorites()}>
            {({ pressed }) => (
              <FontAwesome
                name="remove"
                size={25}
                color={Colors[colorScheme ?? 'light'].text}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        ),
      }}
    />
    <PokemonListing data={favoritePokemon} />
  </>
}