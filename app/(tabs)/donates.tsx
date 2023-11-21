import React from 'react';
import { StyleSheet, TouchableOpacity, Alert, Image, Linking, Clipboard } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function TabDonatesScreen() {

  const showPayPalDonation = () => {
    Linking.openURL('https://www.paypal.com/paypalme/shawwalmuhammad');
  };

  const showMetaMaskAddress = () => {
    const walletAddress = '0x2785b6206ADe4B688ADFD6ECB206f56997eAd85D';

    Alert.alert(
      'MetaMask Wallet Address',
      `Your MetaMask wallet address: ${walletAddress}`,
      [
        {
          text: 'Copy Address',
          onPress: async () => {
            await Clipboard.setString(walletAddress);
            Alert.alert('Address Copied', 'Your MetaMask wallet address has been copied to the clipboard.');
          },
        },
        { text: 'OK', onPress: () => { } },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text>Love the Pokedex App? Support its growth by making a donation! Your contribution ensures more features, better data, and a seamless app experience.
          Your Perks:</Text>
        <View style={styles.textLeft}>
          <Text>⭐ VIP Supporters Page</Text>
          <Text>🚀 Your Name Displayed</Text>
          <Text>💌 Add a Custom Message or Social Media Link</Text>
        </View>

        <Text>Ready to be a VIP Supporter? Donate now!</Text>

        <View style={styles.donationRow}>
          <TouchableOpacity style={styles.payPalButton} onPress={showPayPalDonation}>
            <Image source={require('../../assets/images/paypal.png')} style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.metaMaskButton} onPress={showMetaMaskAddress}>
            <Image source={require('../../assets/images/metamask.png')} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <Text>Thank you for making the Pokédex App awesome!</Text>
      </View>
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
  wrapper: {
    maxWidth: 500,
    minWidth: 300
  },
  donationRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textLeft: {
    justifyContent: 'flex-start',
    paddingVertical: 10,
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
  payPalButton: {
    backgroundColor: '#0070BA', // PayPal blue color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginRight: 13,
  },
  metaMaskButton: {
    backgroundColor: '#E2761B', // MetaMask orange color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 8,
  },
  logo: {
    width: 100,
    resizeMode: 'contain',
    height: 24,
  },
});
