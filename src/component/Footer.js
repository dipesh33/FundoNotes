import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
          <AntDesign name="checksquareo" style={styles.icons} size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="brush" style={styles.icons} size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="mic-none" style={styles.icons} size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="crop-original" style={styles.icons} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.float}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.floatTouch}
          onPress={() => {
            navigation.navigate('CreateNote');
          }}>
          <Feather name="file-plus" style={styles.plusIcon} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F7CD2E',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    padding: 10,
  },
  view: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  float: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 10,
    width: 67,
    height: 67,
    bottom: '80%',
    right: '7%',
    position: 'absolute',
  },
  floatTouch: {
    borderRadius: 15,
    height: 55,
    width: 55,
    borderColor: 'lavender',
    borderWidth: 5,
    alignSelf: 'center',
    elevation: 8,
    backgroundColor: 'lavender',
  },
  plusIcon:{
    padding: '15%',
  },
});

export default Footer;
