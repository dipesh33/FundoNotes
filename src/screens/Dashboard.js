import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Footer from '../component/Footer';
import SearchBar from '../component/SearchBar';
import {fetchNotes} from '../service/NoteService';
import NoteCard from '../component/NoteCard';

const Dashboard = ({navigation}) => {
  const [noteData, setNoteData] = useState([]);

  const fetchData = async () => {
    let data = await fetchNotes();
    setNoteData(data);
    console.log('.................', data);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData()
    })
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SearchBar />

      <View style={{height: '80%'}}>
        <ScrollView>
          <View>
            <Text style={styles.title}>Pin</Text>
            <FlatList
              data={noteData}
              renderItem={({item}) =>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CreateNote', {
                        editData: item,
                        editId: item.noteId,
                      });
                    }}>
                    <NoteCard {...item} />
                  </TouchableOpacity>
              }
            />
          </View>
          <View>
            <Text style={styles.title}>Others</Text>
            <FlatList
              data={noteData}
              renderItem={({item}) =>
                item.isArchive == true ? null : (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CreateNote', {
                        editData: item,
                        editId: item.noteId,
                      });
                    }}>
                    <NoteCard {...item} />
                  </TouchableOpacity>
                )}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: '163%',
  },
});

export default Dashboard;
