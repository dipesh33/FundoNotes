import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../utility/GlobalStyle';
import { Size } from '../utility/Theme';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <View style={styles.view}>
        <TouchableOpacity>
          <MaterialIcon name="brush" style={styles.icons} size={Size.ICON_MEDIUM} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="mic-none" style={styles.icons} size={Size.ICON_MEDIUM} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="crop-original" style={styles.icons} size={Size.ICON_MEDIUM} />
        </TouchableOpacity>
      </View>
      <View style={styles.float}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.floatTouch}
          onPress={() => {
            navigation.navigate('CreateNote');
          }}>
          <Feather name="file-plus" style={styles.plusIcon} size={Size.ICON_LARGE} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Footer;
