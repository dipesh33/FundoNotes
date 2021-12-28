import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {fetchArchiveData} from '../service/NoteService';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import NoteCard from '../component/NoteCard';
import Footer from '../component/Footer';
import { styles } from '../utility/GlobalStyle';
import {Color, Size, Padding} from '../utility/Theme';
import {useDispatch} from 'react-redux';
import {GridView} from '../redux/actions';
import {useSelector} from 'react-redux';
import useLocalisation from '../localisation/useLocalisation';

const Archive = ({navigation}) => {
  const [noteData, setNoteData] = useState([]);

  //Redux
  const isList = useSelector(state => state.isList);
  const dispatch = useDispatch();

  const dictonary = useLocalisation('EN');

  const fetchData = async () => {
    let data = await fetchArchiveData();
    setNoteData(data);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
          <Text style={styles.archiveTitle}>{dictonary.ARCHIVE_TEXT}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialIcon
               color={Color.HEADING}
              name="search"
              size={Size.ICON_MEDIUM}
              style={{padding: Padding.SECONADARY_PADDING, marginLeft: 140}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => dispatch(GridView())}>
            {isList ? (
              <Feather
                name="grid"
                color={Color.HEADING}
                size={Size.ICON_MEDIUM}
                style={{marginLeft: 10, padding: Padding.SECONADARY_PADDING}}
              />
            ) : (
              <Icons
                name="view-agenda-outline"
                size={Size.ICON_MEDIUM}
                color={Color.HEADING}
                style={{marginLeft: 10, padding: Padding.SECONADARY_PADDING}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
        style={noteData}
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
      <View style={styles.Footer}>
        <Footer />
      </View>
    </View>
  );
};

export default Archive;
