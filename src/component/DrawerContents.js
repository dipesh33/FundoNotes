import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerContent = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <DrawerContentScrollView>
                <View style={styles.titleStyle}>
                    <Text style={styles.textStyle}>
                        Fundoo Notes
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
                    <View style={styles.itemStyle}>
                        <AntDesign name="bulb1" size={18} color='black' />
                        <Text style={styles.text}>Notes</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Reminder')}>
                    <View style={styles.itemStyle}>
                        <Icons name="bell-outline" size={18} color='black'></Icons>
                        <Text style={styles.text}>Reminders</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.itemStyle}>
                        <Icons name="plus" size={18} color='black'></Icons>
                        <Text style={styles.text}>Create new label</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Archive')}>
                    <View style={styles.itemStyle}>
                        <Ionicons name="archive-outline" size={20} color="black" />
                        <Text style={styles.text}>Archive</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Deleted')}>
                    <View style={styles.itemStyle}>
                        <AntDesign name="delete" size={18} color='black' />
                        <Text style={styles.text}>Deleted</Text>
                    </View>
                </TouchableOpacity>
            </DrawerContentScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    titleStyle: {
        paddingLeft: 20,
        marginBottom: 40
    },
    itemStyle: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        marginBottom: 30
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'orchid'
    },
    text: {
        fontSize: 18,
        marginLeft: 20,
        color: 'black'

    }


})
export default DrawerContent;