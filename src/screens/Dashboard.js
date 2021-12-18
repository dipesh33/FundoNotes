import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Footer from '../component/Footer';
import SearchBar from '../component/SearchBar';
import {fetchNotes} from '../service/NoteService';
import NoteCard from '../component/NoteCard';

const Dashboard = ({navigation}) => {
  const [noteData, setNoteData] = useState([]);
  const [isList] = useState(false);

  console.log('Dashboard render');
  const fetchData = async () => {
    let data = await fetchNotes();
    setNoteData(data);
    console.log('.................', data);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <View style={styles.container}>
    <ScrollView>
      <SearchBar />
        <View style={styles.pin}>
          <View>
            <Text style={styles.title}>Pin</Text>
            <FlatList
              data={noteData}
              renderItem={({item}) => (
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
              numColumns={!isList ? 1 : 2}
                key={!isList ? 1 : 2}
            />
          </View>
          <View>
            <Text style={styles.title}>Notes</Text>
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
                numColumns={!isList ? 1 : 2}
                key={!isList ? 1 : 2}
            />
          </View>
        </View>
    </ScrollView>
    <View style={styles.footer}>
        <Footer />
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: '70%',
  },
  title: {
    fontSize: 16,
    color: 'black',
    padding: 10,
    fontWeight: 'bold',
  },
  pin:{
    justifyContent:'flex-start',
  }
});

export default Dashboard;
