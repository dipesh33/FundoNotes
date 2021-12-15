import React from 'react';
import 'react-native-gesture-handler';
import StackNav from './src/navigation/StackNav';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};


export default App;
