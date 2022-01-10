import React from 'react';
import { View, Text , TouchableOpacity} from 'react-native';
import { styles } from '../utility/GlobalStyle';
import { Color, Size, Padding } from '../utility/Theme';
import useLocalisation from '../localisation/useLocalisation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const Setting = ({naviagtion}) => {
    const dictonary = useLocalisation('EN');

    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity>
              <MaterialIcon
                color={Color.HEADING}
                name="menu"
                size={Size.ICON_MEDIUM}
                style={{padding: Padding.SECONADARY_PADDING}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.archiveTitle}>{dictonary.SETTING_TEXT}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <MaterialIcon
                 color={Color.HEADING}
                name="search"
                size={Size.ICON_MEDIUM}
                style={{padding: Padding.SECONADARY_PADDING, marginLeft: 140}}
              />
            </TouchableOpacity>
          </View>
          </View>
          </View>
    );
};

export default Setting;
