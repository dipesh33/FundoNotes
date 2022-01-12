import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import PushNotification from 'react-native-push-notification';
import {styles} from '../utility/GlobalStyle';
import {Color, Size} from '../utility/Theme';

export const SetReminder = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date(moment().add(0, 'h')));
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    setDate(date);
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = time => {
    setTime(time);
    setTimePickerVisibility(false);
  };

  const toggleModal = () => {
    setIsModalVisible({isModalVisible: !isModalVisible});
  };

  const togglesModal = () => {
    setIsModalVisible(false);
  };
  
  const handleNotification = () => {
    setIsModalVisible(!isModalVisible);
    if (date != null && time != null) {
      let date = JSON.stringify(date).slice(1, 11);
      let time = JSON.stringify(time).slice(11, 25);
      let dateShedule = new Date(date + time);

      PushNotification.localNotificationSchedule({
        channelId: 'test-channel',
        title: 'Reminder' + date + time,
        message: 'you have set your Reminder at:' + time,
        date: dateShedule,
        allowWhileIdle: true,
        vibrate: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.itemStyle}>
            <Feather
              name="clock"
              size={Size.ICON_MEDIUM}
              color={Color.HEADING}
            />
            <Text style={styles.text}>Choose a date & time</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={togglesModal}>
        <View style={[styles.modalContainer1]}>
          <View style={styles.modalContainer2}>
            <Text style={styles.modalTitle}>Add reminder</Text>
            <View style={styles.firstRow}>
              <Text style={styles.modalText1}>
                {moment(date).format('D MMMM')}
              </Text>
              <TouchableOpacity onPress={showDatePicker}>
                <View style={styles.itemStyle}>
                  <Feather
                    name="chevron-down"
                    size={Size.ICON_MEDIUM}
                    color={Color.HEADING}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            />
            <View style={[styles.firstRow]}>
              <Text style={styles.modalText1}>
                {moment(time).format('h:mm a')}{' '}
              </Text>
              <TouchableOpacity onPress={showTimePicker}>
                <View style={styles.itemStyle}>
                  <Feather
                    name="chevron-down"
                    size={Size.ICON_MEDIUM}
                    color={Color.HEADING}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
            />
            <View style={styles.firstRow}>
              <Button
                onPress={togglesModal}
                title="Cancel"
                color={Color.SECONDARY}
              />
              <Button
                onPress={handleNotification}
                title="Save"
                color={Color.SECONDARY}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
