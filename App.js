import React from 'react';
import 'react-native-gesture-handler';
import StackNav from './src/navigation/StackNav';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './src/navigation/DrawerNav';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};


export default App;
