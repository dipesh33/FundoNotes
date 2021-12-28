import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import NoteCard from '../component/NoteCard';
import { fetchDeleteData } from '../service/NoteService';
import {styles} from '../utility/GlobalStyle';
import { Size,Padding, Color } from '../utility/Theme';

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
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcon
              color={Color.HEADING}
              name="menu"
              size={Size.ICON_MEDIUM}
              style={{padding: Padding.SECONADARY_PADDING}} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.archiveTitle}>Delete</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icons
              name="dots-vertical"
              size={Size.ICON_MEDIUM}
              color={Color.HEADING}
              style={{padding: Padding.SECONADARY_PADDING, marginLeft: 200}}
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
export default Delete;
