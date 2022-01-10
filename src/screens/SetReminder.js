import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Modal, Platform} from 'react-native';
import {styles} from '../utility/GlobalStyle';
import {Color, Padding, Size} from '../utility/Theme';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

export const SetReminder = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let formatDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let formatTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    setText(formatDate + '\n' + formatTime);

    console.log(formatDate + '(' + formatTime + ')');
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <View style={styles.container}>
    <View>
      <TouchableOpacity>
        <View style={styles.itemStyle}>
          <AntDesign
            name="home"
            size={Size.ICON_MEDIUM}
            color={Color.HEADING}
          />
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemStyle}>
          <MaterialIcon
            name="work"
            size={Size.ICON_MEDIUM}
            color={Color.HEADING}
          />
          <Text style={styles.text}>Work</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => showMode('date')}>
          <View style={styles.itemStyle}>
              <Feather
              name="calendar"
              size={Size.ICON_MEDIUM}
              color={Color.HEADING}/>
              <Text style={styles.text}>Choose a date</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.itemStyle}>
              <Feather
              name="clock"
              size={Size.ICON_MEDIUM}
              color={Color.HEADING}/>
              <Text style={styles.text}>Choose a time</Text>
          </View>
      </TouchableOpacity>

      {
        show && (
          <DateTimePicker 
          textId="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          />
        )
      }
    </View>
  </View>
  );
};
