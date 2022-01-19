import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Color, Size } from '../utility/Theme';
import { styles } from '../utility/GlobalStyle';
import ImagePicker from 'react-native-image-crop-picker';

const Profile = ({navigtion}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.itemStyle}>
        <AntDesign
         name="picture"
         size={Size.ICON_MEDIUM}
         color={Color.HEADING}/>
         <Text style={styles.text}>Change Profile Picture</Text>
         </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigtion.navigate('Setting')}>
        <View style={styles.itemsStyle}>
          <AntDesign
          name="setting"
          size={Size.ICON_MEDIUM}
          color={Color.HEADING}/>
          <Text style={styles.text}>Setting</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigtion.navigate('Login')}
        style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile
