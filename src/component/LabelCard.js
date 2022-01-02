import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox} from 'react-native-elements';

export const LabelCard = (props) => {
  const [label, setLabelData] = React.useState(props.label);
  const [isChecked, setChecked] = React.useState(false);

  return (
    <View>
      <View>
        <View style={{padding: 8}}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Icons
              style={{padding: 13}}
              name="label-outline"
              size={25}
              color="black"
            />
            <View style={{width: '70%'}}>
              <Text style={styles.labelText}>{label}</Text>
            </View>
            <CheckBox
              style={{}}
              checked={isChecked}
              onPress={() => setChecked(!isChecked)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  check: {
    padding: 10,
    marginLeft: '35%',
  },
  textInput: {
    width: '100%',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  labelText: {
    fontSize: 20,
    //marginLeft: '10%',
    padding: 10,
  },
});
