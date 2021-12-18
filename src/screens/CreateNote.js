import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {storeNotes} from '../service/NoteService';
import RBSheet from 'react-native-raw-bottom-sheet';
import {BottomTabSheet} from '../component/BottomSheet';

const CreateNote = ({navigation, route}) => {
  const [title, setTitle] = React.useState(
    route?.params?.editData?.title ?? '',
  );
  const [note, setNote] = React.useState(route?.params?.editData?.note ?? '');
  const [isPin, setIsPin] = React.useState(false);
  const [isArchive, setIsArchive] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);

  const receivedTitle = route?.params?.editData?.title;
  console.log('receivedTitle is====', receivedTitle);
  const receivedId = route?.params?.editData?.noteId;
  console.log('receivedNoteId is====', receivedId);

  const refRBSheet = useRef();
  const refPlusRBSheet = useRef();
  const refColorRBSheet = useRef();

  const noteOperation = screen => {
    const noteData = {title, note, isArchive, isPin, isDelete};
    const noteId = route?.params?.editData?.noteId;
    const routingCallback = () => navigation.navigate(screen);
    storeNotes(noteData, routingCallback, noteId);
  };

  const onDeleteButton = async () => {
    noteOperation('Delete', {isDelete: !isDelete});
  };

  const onArchiveButton = async () => {
    noteOperation('Archive', {isArchive: !isArchive});
  };

  const onBackButton = async () => {
    noteOperation('Dashboard');
  };
  const BottomSheet = () => {
    return (
      <View style={styles.screen}>
        <View>
          <TouchableOpacity onPress={onDeleteButton}>
            <View style={styles.itemStyle}>
              <AntDesign name="delete" size={20} color="black" />
              <Text style={styles.text}>Delete</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.itemStyle}>
              <Icons name="content-copy" size={20} color="black" />
              <Text style={styles.text}>Make a copy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.itemStyle}>
              <SimpleLineIcons name="share" size={20} color="black" />
              <Text style={styles.text}>Share</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.itemStyle}>
              <Icons name="label-outline" size={20} color="black" />
              <Text style={styles.text}>Labels</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen2}>
      <View style={styles.topBar}>
        <View style={{flex: 1, padding: 12}}>
          <TouchableOpacity onPress={onBackButton}>
            <Icons name="arrow-left" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.topIcon}>
          <TouchableOpacity onPress={() => setIsPin(!isPin)}>
            {
              <Icons
                name="pin"
                size={25}
                color="#242B2E"
                style={{marginLeft: 100}}
              />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.topIcon}>
          <TouchableOpacity>
            <Icons name="bell-plus-outline" size={25} color="#242B2E" />
          </TouchableOpacity>
        </View>
        <View style={styles.topIcon}>
          <TouchableOpacity onPress={onArchiveButton}>
            <Ionicons name="archive-outline" size={25} color="#242B2E" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <View>
          <TextInput
            style={{fontSize: 25}}
            value={title}
            placeholder="Title"
            placeholderTextColor="grey"
            onChangeText={value => setTitle(value)}
          />
        </View>
        <View>
          <TextInput
            style={{fontSize: 20}}
            value={note}
            placeholder="Note"
            placeholderTextColor="grey"
            onChangeText={value => setNote(value)}
            multiline={true}
          />
        </View>
      </View>
      <View style={styles.bottomStyle}>
        <View style={styles.bottomIcon}>
          <TouchableOpacity>
            <Icons name="plus-box-outline" size={25} color="#242B2E" />
          </TouchableOpacity>
          <RBSheet
            ref={refPlusRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}>
            <BottomTabSheet />
          </RBSheet>
        </View>
        <View style={styles.bottomIcon}>
          <TouchableOpacity onPress={() => refColorRBSheet.current.open()}>
            <Icons name="palette-outline" size={25} color="#242B2E" />
          </TouchableOpacity>
          <RBSheet
            ref={refPlusRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}>
                
            </RBSheet>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity>
            <Text style={{color: 'black'}}>Edited </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomIcon}>
          <TouchableOpacity>
            <Icons name="dots-vertical" size={25} color="#242B2E" />
          </TouchableOpacity>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}>
            <BottomSheet />
          </RBSheet>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screen2: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  topBar: {
    padding: 0,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 10,
  },
  topIcon: {
    padding: 12,
  },
  bottomStyle: {
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  itemStyle: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    marginLeft: 20,
    color: 'black',
  },
});
export default CreateNote;
