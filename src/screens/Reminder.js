import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Footer from '../component/Footer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from '../utility/GlobalStyle';
import { Color, Padding, Size } from '../utility/Theme';

const Reminder = ({navigation}) => {
  const [isList, setIsList] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcon
              color= {Color.HEADING}
              name="menu"
              size={Size.ICON_MEDIUM}
              style={{padding: Padding.SECONADARY_PADDING}} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.archiveTitle}>Reminders</Text>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialIcon
              color= {Color.HEADING}
              name="search"
              size={Size.ICON_MEDIUM}
              style={{padding: Padding.SECONADARY_PADDING, marginLeft: 120}} />
          </TouchableOpacity>
        </View>
        <View>
          {isList == false ? (
            <TouchableOpacity onPress={() => setIsList(true)}>
              <View>
                <Feather
                  name="grid"
                  color= {Color.HEADING}
                  size={Size.ICON_MEDIUM}
                  style={{marginLeft: 10, padding: Padding.SECONADARY_PADDING}} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setIsList(false)}>
              <View>
                <Icons
                  name="view-agenda-outline"
                  size={Size.ICON_MEDIUM}
                  color= {Color.HEADING}
                  style={{marginLeft: Padding.SECONADARY_PADDING, padding: Padding.SECONADARY_PADDING}} />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.Footer}>
        <Footer />
      </View>
    </View>
  );
};

export default Reminder;
