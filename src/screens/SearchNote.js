import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import NoteCard from '../component/NoteCard';
import {fetchNotes} from '../service/NoteService';
import { styles } from '../utility/GlobalStyle';
import { Color, Padding, Size } from '../utility/Theme';

const SearchNote = ({navigation}) => {
  const [allData, setAllState] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const fetchData = async () => {
    let noteData = await fetchNotes();
    setAllState(noteData);
  };
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  const getSearchTerm = textToSearch => {
    const data = allData.filter(item => item.title === textToSearch);
    setSearchData(data);
  };

  return (
    <View style={styles.container1}>
      <View style={styles.searchHeader}>
        <View style={styles.headerItem}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Dashboard');
            }}>
            <Icons
              name="arrow-left"
              size={Size.ICON_MEDIUM}
              color= {Color.HEADING}
              style={{padding: Padding.SECONADARY_PADDING}}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search your Notes"
            style={styles.searchInput}
            onChangeText={text => getSearchTerm(text)}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={searchData}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.searchCard}
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
    </View>
  );
};


export default SearchNote;
