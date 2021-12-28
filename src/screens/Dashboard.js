import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../utility/GlobalStyle';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Footer from '../component/Footer';
import {fetchNotes} from '../service/NoteService';
import NoteCard from '../component/NoteCard';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {GridView} from '../redux/actions';
import {useSelector} from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import useLocalisation from '../localisation/useLocalisation';
import { Color, Padding, Size } from '../utility/Theme';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const Dashboard = ({navigation}) => {
  const [noteData, setNoteData] = React.useState([]);

  //Localisation
  const dictonary = useLocalisation('EN');

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

  //Redux
  const isList = useSelector(state => state.isList);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* Header Tile */}
      <View style={styles.searchBar}>
        <View style={styles.space}>
          <TouchableOpacity onPress={() => dispatch(GridView())}>
            {isList ? (
              <Feather name="grid" color={Color.PRIMARY} size={Size.ICON_MEDIUM} />
            ) : (
              <Icons name="view-agenda-outline" size={Size.ICON_MEDIUM} color= {Color.PRIMARY} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcon
              color= {Color.PRIMARY}
              name="menu"
              size={35}
              style={{padding: Padding.FIRST_PADDING}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar1}>
          <TouchableOpacity onPress={() => navigation.navigate('SearchNote')}>
            <Text style={styles.text1}>{dictonary.SEARCH_BAR_TEXT}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
      <ScrollView>
        <SafeAreaView>
          <View>
            <Text style={styles.title}>{dictonary.PINNED_TEXT}</Text>
            <FlatList
              data={noteData}
              renderItem={({item}) =>
                item.isPin === true ? (
                  <TouchableOpacity
                    style={{width: isList ? '50%' : '100%'}}
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
            <Text style={styles.title}>{dictonary.OTHER_TEXT}</Text>
            <FlatList
              data={noteData}
              renderItem={({item}) =>
                item.isArchive === true ||
                item.isPin === true ||
                item.isDelete === true ? null : (
                  <TouchableOpacity
                    style={{width: isList ? '50%' : '100%'}}
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
        </SafeAreaView>
        </ScrollView>
      </View>
      {/* Footer */}
      <View style={styles.Footer}>
        <Footer />
      </View>
    </View>
  );
};

export default Dashboard;
