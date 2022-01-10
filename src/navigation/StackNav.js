import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import CreateNote from '../screens/CreateNote';
import DrawerNav from './DrawerNav';
import DrawerContent from '../component/DrawerContents';
import SearchNote from '../screens/SearchNote';
import CreateLabel from '../screens/CreateLabel';
import Setting from '../screens/Setting';


const StackNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="DrawerNav"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Signup'} component={Signup} />
      <Stack.Screen name={'DrawerNav'} component={DrawerNav} />
      <Stack.Screen name={'CreateNote'} component={CreateNote} />
      <Stack.Screen name={'SearchNote'} component={SearchNote} />
      <Stack.Screen name={'CreateLabel'} component={CreateLabel}/>
      <Stack.Screen name={'Setting'} component={Setting}/>
    </Stack.Navigator>
  );
};

export default StackNav;
