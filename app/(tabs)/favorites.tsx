import React, { useState } from 'react';
import { favoritePokemonState } from '../../store/globalState';
import PokemonListing from '../../components/PokemonListing';
import { Pressable, useColorScheme } from 'react-native';
import { useRecoilState } from 'recoil';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ClearFavorites from '../../components/ClearFavorite';

export default function TabFavoriteScreen() {
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [favoritePokemon, setFavoritePokemon] = useRecoilState(favoritePokemonState);
  return <>
    <Stack.Screen
      options={{
        // @ts-ignore
        headerRight: () => (
          <Pressable onPress={() => setModalVisible(true)}>
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
    <ClearFavorites
      modalState={modalVisible}
      setModalVisible={setModalVisible}
    />
    <PokemonListing data={favoritePokemon} />
  </>
}