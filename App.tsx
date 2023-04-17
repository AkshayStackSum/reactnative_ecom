/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, useColorScheme } from 'react-native';
import { NavigationStack } from './componets/UI/navigation/Stack';

function App(): JSX.Element {
  
useColorScheme
  return <NavigationContainer  >
    <NavigationStack/>
  </NavigationContainer>
}


export default App;
