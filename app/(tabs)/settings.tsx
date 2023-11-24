import React from 'react';
import { StyleSheet, Switch } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useHeaderHeight } from '@react-navigation/elements';
import { useRecoilState } from 'recoil';
import { autoReadPokemonName } from 'store/globalState';

export default function TabDonatesScreen() {
  const headerHeight = useHeaderHeight();
  const [isEnabled, setIsEnabled] = useRecoilState(autoReadPokemonName);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleAutoRead = () => {
    toggleSwitch();
  }

  return (
    <View style={{ ...styles.container, marginTop: headerHeight }}>
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Text>Auto Read Pokemon Name</Text>
          <Switch
             onValueChange={handleAutoRead}
             value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16
  },
  wrapper: {
    maxWidth: 500,
    minWidth: 300,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
