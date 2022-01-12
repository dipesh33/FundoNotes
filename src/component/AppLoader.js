import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'
import { styles } from '../utility/GlobalStyle'
import { ActivityIndicator } from 'react-native-paper'

export default function AppLoader() {
    return (
        <View style={[ StyleSheet.absoluteFillObject,styles.appLoader]}>
            {/* <LottieView source={require('../assets/images/loading.json')} autoPlay loop /> */}
            <ActivityIndicator size={'large'}/>
        </View>
    )
}
