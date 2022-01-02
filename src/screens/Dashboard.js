import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../utility/GlobalStyle';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Footer from '../component/Footer';
import {fetchNotes} from '../service/NoteService';
import NoteCard from '../component/NoteCard';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {GridView} from '../redux/actions';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';
import useLocalisation from '../localisation/useLocalisation';
import {Color, Padding, Size} from '../utility/Theme';
import {Avatar} from 'react-native-elements';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const Dashboard = ({navigation}) => {
  const [noteData, setNoteData] = React.useState([]);
  const [pinData, setPinData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  //Redux
  const isList = useSelector(state => state.isList);
  const dispatch = useDispatch();

  //Localisation
  const dictonary = useLocalisation('EN');

  //Profile Picture
  const [modalShow, setmodalShow] = React.useState(false);

  const fetchData = async () => {
    let data = await fetchNotes();
    const pin = [];
    const unpin = [];
    data.forEach(item => {
      if (item.isPin && !item.isArchive && !item.delete) {
        pin.push(item);
      } else if (!item.isPin && !item.isArchive && !item.delete) {
        unpin.push(item);
      }
    });
    setNoteData(unpin);
    setPinData(pin);
    setLoading(false);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  if (isLoading) {
    return (
      <Image
        resizeMode="center"
        style={styles.loader}
        source={{uri: 'https://gfycat.com/fluidelderlyamericantoad'}}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.searchBar2}>
          <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <MaterialIcon
                color={Color.HEADING}
                name="menu"
                size={Size.ICON_MEDIUM}
                style={{padding: Padding.SECONADARY_PADDING}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('SearchNote')}>
              <Text style={styles.text1}>{dictonary.SEARCH_BAR_TEXT}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => dispatch(GridView())}>
              {isList ? (
                <Feather
                  name="grid"
                  color={Color.HEADING}
                  size={Size.ICON_MEDIUM}
                  style={styles.listStyle}
                />
              ) : (
                <Icons
                  name="view-agenda-outline"
                  size={Size.ICON_MEDIUM}
                  color={Color.HEADING}
                  style={styles.listStyle}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: '2%'}}>
            <Avatar
              onPress={() => setmodalShow(!modalShow)}
              rounded
              source={{
                uri: 'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w',
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <ScrollView>
          <SafeAreaView>
            <View>
              <View style={styles.headings}>
                <Text style={styles.title}>{dictonary.PINNED_TEXT}</Text>
              </View>
              <FlatList
                data={pinData}
                renderItem={({item}) => (
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
                )}
                numColumns={!isList ? 1 : 2}
                key={!isList ? 1 : 2}
                keyExtractor={item => item.noteId}
              />
            </View>
            <View>
              <View style={styles.headings}>
                <Text style={styles.title}>{dictonary.OTHER_TEXT}</Text>
              </View>
              <FlatList
                data={noteData}
                renderItem={({item}) => (
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
                )}
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
