import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './Components/Navigation/Navigation';

export default function App() {
  return (
    <SafeAreaView>
      <MainStackNavigation/>
    </SafeAreaView>
  );
};