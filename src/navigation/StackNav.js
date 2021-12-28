import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';
import CreateNote from '../screens/CreateNote';
import DrawerNav from './DrawerNav';
import DrawerContent from '../component/DrawerContents';
import Delete from '../screens/Delete';
import Archive from '../screens/Archive';
import SearchNote from '../screens/SearchNote';

const StackNav = () => {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator
      initialRouteName="DrawerNav"
        drawerContent={props => <DrawerContent{...props} />}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Signup'} component={Signup} />
        <Stack.Screen name={'DrawerNav'} component={DrawerNav} />
        <Stack.Screen name={'CreateNote'} component={CreateNote} />
        <Stack.Screen name={'Delete'} component={Delete}/>
        <Stack.Screen name={'Archive'} component={Archive}/>
        <Stack.Screen name={'SearchNote'} component={SearchNote}/>
      </Stack.Navigator>
  );
};

export default StackNav;
