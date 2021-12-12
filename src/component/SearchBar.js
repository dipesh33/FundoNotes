import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View>
            <TouchableOpacity>
              <MaterialIcon
                color="black"
                name="menu"
                size={25}
                style={{padding: 10}}></MaterialIcon>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.text1}>Search your notes</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
                <Icons
                  name="view-agenda-outline"
                  size={25}
                  color="black"
                  style={{marginLeft: 100}}
                />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view2: {
    height: '10%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  view3: {
    height: 50,
    backgroundColor: 'lavender',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 10,
  },
  text1: {
    color: 'grey',
    fontSize: 18,
  },
});

export default SearchBar;
