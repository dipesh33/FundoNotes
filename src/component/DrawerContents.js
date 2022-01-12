import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../utility/GlobalStyle';
import {Color, Font, Padding, Size} from '../utility/Theme';
import useLocalisation from '../localisation/useLocalisation';
import {fetchLabelsData} from '../service/LabelService';
import { handleSignOut } from '../service/AuthService';
import {useDispatch, useSelector} from 'react-redux';
import {setLabelData} from '../redux/actions';

const DrawerContent = ({navigation}) => {

  //Localisation
  const dictonary = useLocalisation('EN');

  const labelData = useSelector(state => state.labelData);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    let data = await fetchLabelsData();
    dispatch(setLabelData(data));
  }, [dispatch]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation, fetchData]);

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  const onLogout = () => {
    handleSignOut(navigateToLoginScreen);
  };


  return (
    <View style={styles.container}>
      <View style={styles.titleStyle}>
        <Text style={styles.textStyle}>Fundoo Notes</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <View style={styles.itemsStyle}>
          <AntDesign
            name="bulb1"
            size={Size.ICON_SMALL}
            color={Color.HEADING}
          />
          <Text style={styles.text}>{dictonary.NOTES_TEXT}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Reminder')}>
        <View style={styles.itemsStyle}>
          <Icons
            name="bell-outline"
            size={Size.ICON_SMALL}
            color={Color.HEADING}
          />
          <Text style={styles.text}>{dictonary.REMINDER_TEXT}</Text>
        </View>
      </TouchableOpacity>

      {labelData?.length > 0 ? (
        <View>
          <View style={styles.line} />
          {labelData.map(item => (
            <TouchableOpacity style={{padding: 2, flexDirection: 'row'}}>
              <Icons
                style={{padding: Padding.INITIAL_PADDING}}
                name="label-outline"
                size={Size.ICON_SMALL}
                color={Color.HEADING}
              />
              <Text style={{fontSize: Font.PRIMARY, color: Color.HEADING, padding: Padding.SECONADARY_PADDING}}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
          <View style={styles.line} />
        </View>
      ) : null}

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('EditLabel')}>
          <View style={styles.itemsStyle}>
            <Icons name="plus" size={Size.ICON_MEDIUM} color={Color.HEADING} />
            <Text style={styles.text}>{dictonary.CREATE_NEW_LABEL_TEXT}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Archive')}>
        <View style={[styles.itemsStyle, styles.expection]}>
          <Ionicons
            name="archive-outline"
            size={Size.ICON_SMALL}
            color={Color.HEADING}
          />
          <Text style={styles.text}>{dictonary.ARCHIVE_TEXT}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Delete')}>
        <View style={styles.itemsStyle}>
          <AntDesign
            name="delete"
            size={Size.ICON_SMALL}
            color={Color.HEADING}
          />
          <Text style={styles.text}>{dictonary.DELETED_TEXT}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>{dictonary.LOGOUT_TEXT}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;
