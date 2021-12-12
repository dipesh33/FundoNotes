import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <View style={styles.view}>
        <TouchableOpacity>
          <AntDesign
            name="checksquareo"
            style={styles.icons}
            size={25}></AntDesign>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon
            name="brush"
            style={styles.icons}
            size={25}></MaterialIcon>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon
            name="mic-none"
            style={styles.icons}
            size={25}></MaterialIcon>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon
            name="crop-original"
            style={styles.icons}
            size={25}></MaterialIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.float}>
        <TouchableOpacity activeOpacity={0.5} style={styles.floatTouch}>
          <Feather name="file-plus" style={styles.plusIcon} size={35}></Feather>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    height: 80,
    backgroundColor: '#BDC3C7',
    borderWidth: 0.2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    padding: 10,
    borderColor: '#BDC3C7',
  },
  view: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusView: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 10,
    width: 67,
    height: 67,
    bottom: '70%',
    right: '7%',
    position: 'absolute',
  },
  googlePlus: {
    borderRadius: 15,
    marginRight: 45,
    height: 65,
    width: 65,
    borderWidth: 5,
    alignSelf: 'center',
    elevation: 8,
    backgroundColor: '#CAD5E2',
    borderColor: '#CAD5E2',
  },
  addImg: {
    width: 55,
    height: 55,
  },
  icons: {
    color: '#009387',
    alignContent: 'space-between',
    marginLeft: 15,
  },
  float: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatTouch: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius:100/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#009387',
    borderColor:'lavender',
    right:30,
    bottom:30
  },
  plusIcon: {
    width: 50,
    height: 50,
    padding:10
  },
});
export default Footer;
