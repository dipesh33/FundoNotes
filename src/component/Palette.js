import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../utility/GlobalStyle';

const colors = [
    '#ffffff',
    '#ff69b4',
    '#90ee90',
    '#ffa07a',
    '#6495ed',
    '#7fff00',
    '#ffe4e1',
    '#00fa9a',
    '#20b2aa',
    '#ffb6c1',
    '#fafad2',
    '#da70d6',
    '#00ffff',
  ];

export default function Palette() {
    const [bgColor, setBgColor] = React.useState('#fffff');
  return (
    <View style={[styles.container], {backgroundColor: bgColor}}>
      <Text style={styles.paletteText}>Choose a Color</Text>
      <ScrollView horizontal>
          {colors.map((color) => (
              <TouchableOpacity onPress={() => setBgColor(colors)}
              style={[styles.paletteView, {backgroundColor: color }
            ]}/>
          ))}
      </ScrollView>
    </View>
  );
}
