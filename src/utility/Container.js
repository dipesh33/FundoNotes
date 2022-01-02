import React, { Children } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Container = ({children}) => {
    return (
        <LinearGradient colors={['#FD297A', '#9424F0']} style={styles.gradient}>
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient:{
        flex:1,
    },
    container:{
        flex:1,
        marginHorizontal:15,
    },
});

export default Container;

