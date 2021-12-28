import React from 'react';
import 'react-native-gesture-handler';
import StackNav from './src/navigation/StackNav';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <StackNav />
      </Provider>
    </NavigationContainer>
  );
};


export default App;
