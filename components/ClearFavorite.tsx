import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { useRecoilState  } from 'recoil';
import { favoritePokemonState } from '../store/globalState';
import { BlurView } from 'expo-blur';
import Modal from 'react-native-modal';

const ClearFavorites = ({modalState, setModalVisible}) => {

  const [_, setFavoritePokemon] = useRecoilState(favoritePokemonState);
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleClearFavorites = () => {
    setFavoritePokemon([]);
    closeModal();
  };

  return (
    <Modal
      // @ts-ignore
      onBackdropPress={() => setModalVisible(false)}
      isVisible={modalState}
      style={styles.modalWrapper}
    >
        <BlurView style={styles.modalView}>
          <Text style={styles.modalTitle}>Clear All Favorites</Text>
          <Text style={styles.modalText}>Are you sure you want to delete all favorite Pokemon?</Text>
          <View style={styles.row}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonConfirm]}
              onPress={() => handleClearFavorites()}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  modalWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    maxWidth: 300,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: "center",
    paddingBottom: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  centeredView: {
    backgroundColor: 'transparent',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonConfirm: {
    backgroundColor: "#2f95dc",
    marginHorizontal: 5,
    width: 70,
  },
  buttonClose: {
    backgroundColor: "#c93543",
    marginHorizontal: 5,
    width: 70,
  },
});

export default ClearFavorites;