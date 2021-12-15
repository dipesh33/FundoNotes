import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native'
import Footer from '../component/Footer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';


const Reminder = ({ navigation }) => {
    const [isList, setIsList] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <MaterialIcon color='black' name="menu" size={25} style={{ padding: 10, }}></MaterialIcon>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.titleStyle}>
                        Reminders
                    </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <MaterialIcon color='black' name="search" size={25} style={{ padding: 10, marginLeft: 120 }}></MaterialIcon>
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        isList == false ?
                            (
                                <TouchableOpacity onPress={() => setIsList(true)}>
                                    <View>
                                        <Feather name="grid" color='black' size={25} style={{ marginLeft: 10, padding: 10 }}></Feather>
                                    </View>
                                </TouchableOpacity>
                            )
                            : (
                                <TouchableOpacity onPress={() => setIsList(false)}>
                                    <View>
                                        <Icons name="view-agenda-outline" size={25} color='black' style={{ marginLeft: 10, padding: 10 }}></Icons>
                                    </View>
                                </TouchableOpacity>
                            )
                    }
                </View>

            </View>
            <View style={styles.view}>
                <Footer />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        color: 'black'
    },
    header: {
        height: "9%",
        backgroundColor: 'lavender',
        flexDirection: 'row',
        padding: 10
    },
    titleStyle: {
        padding: 10,
        color: 'black',
        fontSize: 18,
    },
})
export default Reminder;