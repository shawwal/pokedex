import React from 'react';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { useColorScheme } from 'react-native';

const CustomTabBar = (props: any) => {
  const theme = useColorScheme();
  return (
    <BlurView
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      tint={theme}
      intensity={100}
    >
      <BottomTabBar {...props} />
    </BlurView>
  );
};

export default CustomTabBar;
