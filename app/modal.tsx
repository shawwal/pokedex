import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity, Linking, useColorScheme, ScrollView } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  const theme = useColorScheme();
  const themeColor = theme == 'dark' ? 'white' : 'black';
  const reverseThemeColor = theme == 'dark' ? 'black' : 'white';
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.textCenter}>
          Hi I created this app to share about how to build mobile apps using Expo/React Native on my YouTube Channel.
          Feel free to ask any questions regarding this app or contribute by sending pull request at Github repo of this project.
        </Text>
        <Text style={styles.title}>{"\n"}Do you want to learn how to make this app?</Text>
        <Text style={styles.textCenter}>Go watch the tutorial at 'Shawwal Muhammad' YouTube channel and don't forget to subscribe for more content like this. Press link below to learn how to create this app now!{"\n"}</Text>
        <View style={styles.socialMediaWrapper}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => Linking.openURL('https://www.youtube.com/channel/UCP_ueVbLEBk_FyZodKZQS4Q')}>
            <View style={{ ...styles.socialMedia, backgroundColor: '#FF0000' }}>
              <AntDesign size={30} color="white" name="youtube" />
              <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft: 10 }}>Watch Tutorial</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => Linking.openURL('https://github.com/shawwal/pokedex')}>
            <View style={{ ...styles.socialMedia, backgroundColor: themeColor }}>
              <AntDesign size={30} color={reverseThemeColor} name="github" />
              <Text style={{ color: reverseThemeColor, fontWeight: 'bold', paddingLeft: 10 }}>Github Repo</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}>Developer Notes</Text>
        <Text style={styles.modalText}>This is an unofficial, non-commercial, fan-made app and is NOT affiliated, endorsed or supported by Nintendo, Game Freak and The Pokémon Company in any way. Many images used in this app are copyrighted and are supported under fair use. Pokémon and Pokémon character names are trademarks of Nintendo. No copyright infringement intended.</Text>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    maxWidth: 900,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  modalText: {
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  socialMediaWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    width: '100%',
  },
  socialMedia: {
    paddingVertical: 5,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 3
  },
  textCenter: {
    textAlign: 'center'
  }
});
