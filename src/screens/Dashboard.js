import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Footer from '../component/Footer';
import SearchBar from '../component/SearchBar';

const Dashboard = () => {
  return (
    <View style={styles.container}>
        <SearchBar/>
        <View style={styles.footer}>
        <Footer/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

    footer:{
        marginTop:"163%"
    }
});

export default Dashboard;
