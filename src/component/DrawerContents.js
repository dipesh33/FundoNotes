import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../utility/GlobalStyle';
import { Size } from '../utility/Theme';
import useLocalisation from '../localisation/useLocalisation';

const DrawerContent = ({ navigation }) => {
    //Localisation
  const dictonary = useLocalisation('EN');

    return (
        <View style={styles.container}>
            <DrawerContentScrollView>
                <View style={styles.titleStyle}>
                    <Text style={styles.textStyle}>
                        Fundoo Notes
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <View style={styles.itemStyle}>
                        <AntDesign name="bulb1" size={Size.ICON_SMALL} color="black" />
                        <Text style={styles.text}>{dictonary.NOTES_TEXT}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Reminder')}>
                    <View style={styles.itemStyle}>
                        <Icons name="bell-outline" size={Size.ICON_SMALL} color="black" />
                        <Text style={styles.text}>{dictonary.REMINDER_TEXT}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Label')}>
                    <View style={styles.itemStyle}>
                        <Icons name="plus" size={Size.ICON_SMALL} color="black" />
                        <Text style={styles.text}>{dictonary.CREATE_NEW_LABEL_TEXT}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Archive')}>
                    <View style={styles.itemStyle}>
                        <Ionicons name="archive-outline" size={Size.ICON_SMALL} color="black" />
                        <Text style={styles.text}>{dictonary.ARCHIVE_TEXT}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Delete')}>
                    <View style={styles.itemStyle}>
                        <AntDesign name="delete" size={Size.ICON_SMALL} color="black" />
                        <Text style={styles.text}>{dictonary.DELETED_TEXT}</Text>
                    </View>
                </TouchableOpacity>
                {/* <Button onPress={() => navigation.navigate('Login')} title="Logout" style={styles.logOut}/> */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>{dictonary.LOGOUT_TEXT}</Text>
                </TouchableOpacity>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;
