import React, { useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fetchArchiveData} from '../service/NoteService';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import NoteCard from '../component/NoteCard'
import Footer from '../component/Footer';

const Archive = ({navigation}) => {
  const [noteData, setNoteData] = useState([]);
  const [isList, setIsList] = useState(false);

  const fetchData = async () => {
    let data = await fetchArchiveData();
    setNoteData(data);
    console.log('..........', data);
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
          <Text style={styles.titleStyle}>Archive</Text>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialIcon
              color="black"
              name="search"
              size={25}
              style={{padding: 10, marginLeft: 140}}></MaterialIcon>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setIsList(!isList)}>
            {isList ? (
              <Icons
                name="view-agenda-outline"
                size={25}
                color="black"
                style={{marginLeft: 10, padding: 10}}
              />
            ) : (
              <Feather
                name="grid"
                color="black"
                size={25}
                style={{marginLeft: 10, padding: 10}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View>
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
      <View style={styles.view}>
        <Footer />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    color: 'black',
  },
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

export default Archive;
