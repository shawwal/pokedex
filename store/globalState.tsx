import { atom } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const localStorageEffect = (key) => ({ onSet, setSelf }: { onSet: any, setSelf: any }) => {
  // Check if AsyncStorage is available
  if (typeof AsyncStorage !== 'undefined') {
    // Load data from AsyncStorage when the atom is initialized
    AsyncStorage.getItem(key)
      .then((savedState) => {
        if (savedState) {
          setSelf(JSON.parse(savedState));
        }
      })
      .catch((error) => {
        console.error('Error loading data from AsyncStorage:', error);
      });

    // Save data to AsyncStorage whenever the atom is updated
    onSet((newValue) => {
      AsyncStorage.setItem(key, JSON.stringify(newValue))
        .catch((error) => {
          console.error('Error saving data to AsyncStorage:', error);
        });
    });
  } else {
    // Handle the case where AsyncStorage is not available
    console.error('AsyncStorage is not available in this environment.');
  }
};

export const favoritePokemonState = atom({
  key: 'favoritePokemonState',
  default: [],
  effects_UNSTABLE: [localStorageEffect('favoritePokemonState')],
});

export const autoReadPokemonName = atom({
  key: 'autoReadPokemonName',
  default: false,
  effects_UNSTABLE: [localStorageEffect('autoReadPokemonName')],
});
