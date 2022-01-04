/* eslint-disable no-unused-vars */
import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {addUpdateNote} from '../service/NoteService';
import RBSheet from 'react-native-raw-bottom-sheet';
import {BottomTabSheet} from '../component/BottomSheet';
import {styles} from '../utility/GlobalStyle';
import {Color, Size} from '../utility/Theme';
import {Shared} from '../component/Share';
import {createNote} from '../component/ToastMsg';
import {SetReminder} from './SetReminder';

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
  const refReminderRBSheet = useRef();

  const noteOperation = (screen, changeData = {}) => {
    const noteData = {title, note, isArchive, isPin, isDelete, ...changeData};
    const noteId = route?.params?.editData?.noteId;
    const routingCallback = () => navigation.navigate(screen);
    const op = noteId ? 'update' : 'add';
    addUpdateNote(noteData, op, routingCallback, noteId);
  };

  const onDeleteButton = async () => {
    noteOperation('Dashboard', {isDelete: !isDelete});
  };

  const onArchiveButton = async () => {
    noteOperation('Dashboard', {isArchive: !isArchive});
  };

  const onBackButton = async () => {
    noteOperation('Dashboard');
  };
  const BottomSheet = () => {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={onDeleteButton}>
            <View style={styles.itemStyle}>
              <AntDesign
                name="delete"
                size={Size.ICON_MEDIUM}
                color={Color.HEADING}
              />
              <Text style={styles.text}>Delete</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.itemStyle}>
              <Icons
                name="content-copy"
                size={Size.ICON_MEDIUM}
                color={Color.HEADING}
              />
              <Text style={styles.text}>Make a copy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Shared}>
            <View style={styles.itemStyle}>
              <SimpleLineIcons
                name="share"
                size={Size.ICON_MEDIUM}
                color={Color.HEADING}
              />
              <Text style={styles.text}>Share</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CreateLabel')}>
            <View style={styles.itemStyle}>
              <Icons
                name="label-outline"
                size={Size.ICON_MEDIUM}
                color={Color.HEADING}
              />
              <Text style={styles.text}>Labels</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.screen, styles.screen2]}>
      <View style={styles.topBar}>
        <View style={{flex: 1, padding: 12}}>
          <TouchableOpacity
            onPress={() => {
              onBackButton();
              createNote();
            }}>
            <Icons
              name="arrow-left"
              size={Size.ICON_MEDIUM}
              color={Color.HEADING}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topIcon}>
          <TouchableOpacity onPress={() => setIsPin(!isPin)}>
            {isPin ? (
              <Icons
                name="pin"
                size={Size.ICON_MEDIUM}
                color={Color.HEADING}
                style={{marginLeft: 100}}
              />
            ) : (
              <Icons
                name="pin-outline"
                color={Color.HEADING}
                size={Size.ICON_MEDIUM}
                style={{marginLeft: 100}}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.topIcon}>
          <TouchableOpacity onPress={() => refReminderRBSheet.current.open()}>
            <Icons
              name="bell-plus-outline"
              size={Size.ICON_MEDIUM}
              color={Color.HEADING}
            />
          </TouchableOpacity>
          <RBSheet
            ref={refReminderRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}>
            <SetReminder />
          </RBSheet>
        </View>
        <View style={styles.topIcon}>
          <TouchableOpacity onPress={onArchiveButton}>
            <Ionicons
              name="archive-outline"
              size={Size.ICON_MEDIUM}
              color={Color.HEADING}
            />
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
          <TouchableOpacity onPress={() => refPlusRBSheet.current.open()}>
            <Icons
              name="plus-box-outline"
              size={Size.ICON_MEDIUM}
              color={Color.HEADING}
            />
          </TouchableOpacity>
          <RBSheet
            ref={refPlusRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}>
            <BottomTabSheet />
          </RBSheet>
        </View>
        <View style={styles.bottomIcon}>
          <TouchableOpacity>
            <Icons
              name="palette-outline"
              size={Size.ICON_MEDIUM}
              color={Color.HEADING}
            />
          </TouchableOpacity>
          {/* <RBSheet
            ref={refPlusRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}>

            </RBSheet> */}
        </View>
        <View style={styles.editedText}>
          <TouchableOpacity>
            <Text style={styles.textColor}>Edited </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomIcon}>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Icons
              name="dots-vertical"
              size={Size.ICON_MEDIUM}
              color={Color.HEADING}
            />
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

export default CreateNote;
