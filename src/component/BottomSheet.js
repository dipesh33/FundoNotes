import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export const plusBottomSheet = () => {
    return (
        <View style={{ flex: 1 }}>
            <View>
                <TouchableOpacity>
                    <View style={styles.itemStyle}>
                        <Icons name="camera" size={20} color='black' />
                        <Text style={styles.text}>Take photo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.itemStyle}>
                        <Icons name="image-outline" size={20} color='black' />
                        <Text style={styles.text}>Add image</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.itemStyle}>
                        <Icons name="brush" size={20} color='black' />
                        <Text style={styles.text}>Drawing</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.itemStyle}>
                        <Icons name="microphone-outline" size={25} color='black' />
                        <Text style={styles.text}>Recording</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        marginBottom: 30
    },
    text: {
        fontSize: 18,
        marginLeft: 20,
        color: 'black'
    }
})