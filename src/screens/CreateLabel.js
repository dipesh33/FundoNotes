import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const CreateLabel = () => {
    const [isFocused, setFocused] = React.useState(false);

  return (
    <View style={styles.container1}>
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <TouchableOpacity>
            <Icons
              name="arrow-left"
              size={25}
              color="black"
              style={{padding: 10}}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter label name"
            style={styles.textInput}
            onFocus={() => {
              setFocused(!isFocused);
            }}
          />
        </View>
      </View>
      <View>
        {isFocused ? (
          <View style={styles.container2}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}>
              <Icons name="plus" size={25} color="blue" />
              <Text style={styles.createtxt}>Create</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  header: {
    height: 70,
    width: '100%',
  },
  headerItem: {
    flexDirection: 'row',
  },
  container2: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    padding: 15,
  },
  createtxt: {
    marginLeft: 30,
    fontSize: 18,
    color: 'black',
  },
  textInput: {
    fontSize: 18,
  },
});

export default CreateLabel;
