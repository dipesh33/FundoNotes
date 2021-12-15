import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import NoteCard from '../component/NoteCard';
import { fetchDeleteData } from '../service/NoteService';

const Delete = ({navigation}) => {
  const [noteData, setNoteData] = useState([]);

  const fetchData = async () => {
    let data = await fetchDeleteData();
    setNoteData(data);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcon
              color="black"
              name="menu"
              size={25}
              style={{padding: 10}}></MaterialIcon>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titleStyle}>Delete</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icons
              name="dots-vertical"
              size={25}
              color="black"
              style={{padding: 10, marginLeft: 200}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={noteData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateNote', {
                editData: item,
              });
            }}>
            <NoteCard {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: '9%',
    backgroundColor: 'lavender',
    flexDirection: 'row',
    padding: 10,
  },
  titleStyle: {
    padding: 10,
    color: 'black',
    fontSize: 18,
  },
});
export default Delete;
