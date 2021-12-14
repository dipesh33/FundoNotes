import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';
import Drawer from '../navigation/Drawer'


const StackNav = () => {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Signup'} component={Signup} /> */}
        <Stack.Screen name={'Dashboard'} component={Dashboard}/>
        <Stack.Screen name="Drawer" component={Drawer}/>
      </Stack.Navigator>
  );
};

export default StackNav;
