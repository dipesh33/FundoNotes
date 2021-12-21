import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Footer from '../component/Footer';
import {fetchNotes} from '../service/NoteService';
import NoteCard from '../component/NoteCard';
import {FlatList, ScrollView} from 'react-native-gesture-handler';



const Dashboard = ({navigation}) => {
  const [noteData, setNoteData] = React.useState([]);
  const [isList, setIsList] = React.useState(false);

  const fetchData = async () => {
    let data = await fetchNotes();
    setNoteData(data);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  const searchUser = ({textToSearch}) => {
    alert(textToSearch);
  };

  return (
    <View style={styles.container}>
      {/* Header Tile */}
      <View style={styles.searchBar}>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.openDrawer()}>
          <MaterialIcon
            color="white"
            name="menu"
            size={35}
            style={{padding: 5}}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => setIsList(!isList)}>
            {isList ? (
              <Icons
                name="view-agenda-outline"
                size={25}
                color="black"
                style={{marginLeft: 0}}
              />
            ) : (
              <Feather
                name="grid"
                color="black"
                size={25}
                style={{marginLeft: 0}}
              />
            )}
          </TouchableOpacity> */}
        <TextInput style={styles.searchBar2} placeholder='Seach your notes!'onChangeText={text => this.searchUser(text)}/>
      </View>
      <View>
        <ScrollView scrollEnabled={true}>
          <View>
            <Text style={styles.title}>Pinned</Text>
            <FlatList
              scrollEnabled={false}
              data={noteData}
              renderItem={({item}) =>
                item.isPin === true ? (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CreateNote', {
                        editData: item,
                        editId: item.noteId,
                      });
                    }}>
                    <NoteCard {...item} />
                  </TouchableOpacity>
                ) : null
              }
              numColumns={!isList ? 1 : 2}
              key={!isList ? 1 : 2}
              keyExtractor={item => item.noteId}
            />
          </View>
          <View>
            <Text style={styles.title}>Other</Text>
            <FlatList
              data={noteData}
              renderItem={({item}) =>
                item.isArchive === true ||
                item.isPin === true ||
                item.isDelete === true ? null : (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CreateNote', {
                        editData: item,
                        editId: item.noteId,
                      });
                    }}>
                    <NoteCard {...item} />
                  </TouchableOpacity>
                )
              }
              numColumns={!isList ? 1 : 2}
              key={!isList ? 1 : 2}
              keyExtractor={item => item.noteId}
            />
          </View>
        </ScrollView>
      </View>
      {/* Footer */}
      <View style={styles.Footer}>
        <Footer />
      </View>
    </View>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#F7CD2E',
    height: height * 0.20,
  },
  searchBar2: {
    alignItems: 'flex-end',
    backgroundColor: 'white',
    paddingLeft: '20%',
    width: '90%',
    borderRadius: 10,
    marginTop: '5%',
    marginLeft: 15,
  },
  menu: {
    marginTop: '5%',
    paddingLeft: '5%',
  },
  Footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    color: 'black',
  },
  Grid: {
    flexDirection: 'row-reverse',
  },
  title:{
    color: 'black',
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default Dashboard;
