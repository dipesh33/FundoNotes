import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Reminder from '../screens/Reminder';
import Dashboard from '../screens/Dashboard';
import Archive from '../screens/Archive';
import Delete from '../screens/Delete';
import DrawerContent from '../component/DrawerContents';
import EditLabels from '../screens/EditLabel';


const DrawerNav = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Dashboard" drawerContent={props => <DrawerContent{...props}/>} screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Dashboard" component={Dashboard}/>
            <Drawer.Screen name="Reminder" component={Reminder}/>
            <Drawer.Screen name="Archive" component={Archive}/>
            <Drawer.Screen name="Delete" component={Delete}/>
            <Drawer.Screen name="EditLabel" component={EditLabels}/>
        </Drawer.Navigator>
    );
};

export default DrawerNav;

