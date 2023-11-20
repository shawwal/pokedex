import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Image, Alert, ActivityIndicator, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
import { Text, View } from '../components/Themed';
import axios from 'axios';
import TypeColors from '../constants/TypeColors';
import PokemonTypes from '../constants/PokemonTypes';
import * as Speech from 'expo-speech';
import { useLocalSearchParams } from 'expo-router';
import pokemonMovesType from "../constants/PokemonMovesType";


export default function PokemonDetailsScreen() {
  const params = useLocalSearchParams();
  const { endPoint, imgId } = params;
  const [imageId, setImageId] = useState(imgId);
  const [pokeEndPoint, setEndpoint] = useState(endPoint as any);
  const [details, setDetail] = useState([]) as any;
  const [species, setSpecies] = useState([]) as any;
  const [evolution, setEvolution] = useState([]) as any;
  const [evolutionEndPoint, setEvolutionEndPoint] = useState([]) as any;
  const [dominantType, setDominantType] = useState('');
  const [activeTabs, setActiveTabs] = useState(0) as any;

  const officialArtWork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + imageId + ".png";

  const getPokemon = async () => {
    axios({
      url: pokeEndPoint,
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        // console.log('data', response.data.moves);
        // console.log('response.data', response.data)
        setDetail(response.data);
        setDominantType(response.data.types[0].type.name);
      }
    }).catch((error) => {
      Alert.alert('Something went wrong', error);
    })
  }

  const pushToEvolution = async (id: any) => {
    setImageId(id);
    setEndpoint('https://pokeapi.co/api/v2/pokemon/' + id);
  }

  const speciesEndpoint = 'https://pokeapi.co/api/v2/pokemon-species/' + imageId;

  const getPokemonSpecies = async () => {
    axios({
      url: speciesEndpoint,
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        let englishFiltered = response.data.flavor_text_entries.filter((obj: any) => obj.language.name.includes('en'));
        setSpecies(englishFiltered);
        setEvolutionEndPoint(response.data.evolution_chain.url);
      }
    }).catch((error) => {
      Alert.alert('Something went wrong', error);
    })
  }

  useEffect(() => {
    getPokemon();
    getPokemonSpecies();
  }, [pokeEndPoint]);

  const getEvolution = () => {
    axios({
      url: evolutionEndPoint,
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        let evoChain = [];
        let evoData = response.data.chain;
        do {
          let evoDetails = evoData['evolution_details'][0];
          evoChain.push({
            "species_name": evoData.species.name,
            "species_url": evoData.species.url,
            "min_level": !evoDetails ? 1 : evoDetails.min_level,
            "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
            "item": !evoDetails ? null : evoDetails.item
          });
          evoData = evoData['evolves_to'][0];
        } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
        setEvolution(evoChain);
      }
    }).catch((error) => {
      Alert.alert('Something went wrong', error);
    })
  }

  if (activeTabs == 1) {
    evolution.length == 0 ? getEvolution() : null;
  }

  let desc = species[0]?.flavor_text;
  const newDesc = desc?.replace(/[\n\r\f]+/g, ' ');
  const TabArray = ['Base Stats', 'Evolution', 'Moves'];
  const StatsArray = ['hp', 'atk', 'satk', 'def', 'sdef', 'spd'];

  let animation = useRef(new Animated.Value(0));

  const pokeSpeak = (sentance: string) => {
    Speech.speak(sentance);
  };


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={{ ...styles.imageBg, backgroundColor: TypeColors[dominantType] }} />
        <Image
          defaultSource={require('./../assets/images/pokeball.png')}
          style={styles.pokemonImg}
          source={{ uri: officialArtWork }}
        />
        <View style={styles.detailsBg}>
          <View style={styles.detailsWrapper}>
            <TouchableOpacity onPress={() => pokeSpeak(details.name)}><Text style={styles.pokemonName} ellipsizeMode='tail' numberOfLines={1}>{details.name}</Text></TouchableOpacity>
            <View style={styles.typeRow}>
              {details.types?.map((obj: any, index: string | number | undefined) => {
                const pokeType = PokemonTypes[obj.type.name];
                return (
                  <View key={index} style={{ ...styles.typeBorder, backgroundColor: TypeColors[obj.type.name], borderColor: TypeColors[obj.type.name] }}>
                    {/* @ts-ignore */}
                    <Image source={pokeType} />
                    <Text style={styles.typeText}>{obj.type.name}</Text>
                  </View>
                )
              })}
            </View>
            {newDesc == undefined ? <ActivityIndicator /> : <TouchableOpacity onPress={() => pokeSpeak(String(newDesc))}><Text style={styles.descText}>{String(newDesc)}</Text></TouchableOpacity>}
            {details.height ?
              <View style={styles.bmi}>
                <Text>Height: {details.height / 10} m</Text>
                <Text>Weight: {details.weight / 10} kg</Text>
              </View>
              : null}
            <Text style={{ textAlign: 'center', fontWeight: '500' }}>Abilities</Text>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 7,
            }}>
              {details.abilities?.map((obj: any, index: number) => {
                return (
                  <View key={index} style={{
                    borderWidth: 1,
                    borderColor: TypeColors[dominantType],
                    padding: 5,
                    borderRadius: 5,
                    margin: 3
                  }}>
                    <Text style={{ textTransform: "capitalize", color: TypeColors[dominantType] }}>{obj.ability.name}</Text>
                  </View>
                )
              })}
            </View>
            {details.stats ?
              <View style={styles.tabContainer}>
                <View style={styles.tabRow}>
                  {TabArray.map((obj: any, index: number) => {
                    const checkActiveTabs = activeTabs == index ? TypeColors[dominantType] : undefined;
                    const checkActiveText = activeTabs == index ? 'white' : TypeColors[dominantType];
                    return (
                      <TouchableOpacity
                        key={index}
                        style={{ ...styles.tabs, backgroundColor: checkActiveTabs }}
                        onPress={() => setActiveTabs(index)}
                      >
                        <Text style={{ ...styles.tabText, color: checkActiveText }}>{obj}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
                {activeTabs == 0 ?
                  <View>
                    {details.stats?.map((obj: any, index: number) => {
                      const maxRange = obj.base_stat > 200 ? obj.base_stat : 200;
                      const range = obj.base_stat / maxRange * 100;
                      let width = animation.current.interpolate({
                        inputRange: [0, maxRange],
                        outputRange: [`${range}%`, "100%"],
                        extrapolate: "clamp"
                      })
                      return (
                        <View style={styles.statsRow} key={index}>
                          <Text style={{ ...styles.statText, color: TypeColors[dominantType] }}>{StatsArray[index]}</Text>
                          <Text style={styles.statNumber}>{obj.base_stat}</Text>
                          <View style={{ ...styles.progressBar, borderColor: TypeColors[dominantType], }}>
                            <Animated.View style={{ backgroundColor: TypeColors[dominantType], width }} />
                          </View>
                        </View>
                      )
                    })}
                  </View>
                  : null}
                {activeTabs == 1 ?
                  <View style={styles.evolutionChain}>
                    {evolution.map((obj: any, index: number) => {
                      const urlString = String(obj.species_url);
                      const pokemonId = urlString.slice(-7).replace(/\D|\//g, "");
                      const pokmeonImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemonId + '.png';
                      return (
                        <TouchableOpacity
                          style={styles.evolutionRow}
                          key={index}
                          onPress={() => pushToEvolution(pokemonId)}
                        >
                          <Image
                            style={styles.evolutionThumb}
                            source={{ uri: pokmeonImage }} />
                          <Text style={{ textTransform: 'capitalize' }}>{obj.species_name}</Text>
                        </TouchableOpacity>
                      )
                    })}

                  </View>
                  : null}
                {activeTabs == 2 ?
                  <View>
                    {details.moves.map((obj: any, index: number) => {

                      let checkType = pokemonMovesType.filter(function (entry: any) {
                        return entry.name === obj.move.name;
                      });
                      
                      let moveType = checkType != undefined ? checkType[0]?.type : dominantType;

                      return (
                        <View key={index} style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: 7,
                          paddingBottom: 7,
                          alignItems: 'center',
                          borderBottomColor: '#aeaeae',
                          borderBottomWidth: 0.5
                        }}>
                          <View>
                            <Text style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{obj.move.name}</Text>
                            <Text>Level {obj.version_group_details[0].level_learned_at}</Text>
                          </View>

                          <View
                            style={{
                              borderColor: TypeColors[moveType],
                              padding: 5,
                              borderRadius: 20,
                              borderWidth: 1,
                              backgroundColor: TypeColors[moveType],
                            }}
                          >
                            {/* @ts-ignore */}
                            <Image style={{ width: 17, height: 17, resizeMode: 'contain' }} source={PokemonTypes[moveType]} />
                          </View>
                        </View>
                      )
                    })}
                  </View>
                  : null}
              </View>
              : null}
          </View>
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    alignItems: 'center',
  },
  bmi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  imageBg: {
    width: '100%',
    height: 270,
    alignItems: 'center',
    marginBottom: -70,
    zIndex: 1,
  },
  detailsBg: {
    paddingTop: 70,
    width: '100%',
    flex: 1,
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
    zIndex: 2,
    alignItems: 'center',
  },
  detailsWrapper: {
    maxWidth: 600,
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
  pokemonName: {
    textTransform: 'capitalize',
    fontSize: 27,
    textAlign: 'center'
  },
  typeText: {
    textTransform: 'capitalize',
    paddingLeft: 7,
    fontSize: 17,
    color: 'white'
  },
  typeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  typeBorder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    padding: 5,
    margin: 3,
    borderRadius: 10,
  },
  descText: {
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  pokemonImg: {
    width: 250,
    height: 250,
    zIndex: 3,
    top: 30,
    position: 'absolute',
    resizeMode: 'contain',
  },
  tabContainer: {
    padding: 10
  },
  tabText: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 15,
  },
  tabRow: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 5,
    width: '100%',
  },
  tabs: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    padding: 5,
    margin: 3,
    borderRadius: 10,
    width: '33%',
    justifyContent: 'center',
  },
  statsRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  statText: {
    fontSize: 15,
    width: 45,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  statNumber: {
    width: 35,
    fontSize: 15,
    display: 'flex',
    textAlign: 'right',
    paddingRight: 5
  },
  statWrapper: {
    display: 'flex',
    flex: 1,
  },
  progressBar: {
    flexDirection: 'row',
    height: 10,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    display: 'flex',
    flex: 1,
    alignSelf: 'center',
  },
  evolutionChain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  evolutionRow: {
    display: 'flex',
    margin: 11,
    alignItems: 'center',
  },
  evolutionThumb: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
});