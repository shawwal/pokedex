import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { View } from '../components/Themed';

const Loading = () => (
    <View style={styles.loadingContainer}>
        <ActivityIndicator />
    </View>
);

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Loading