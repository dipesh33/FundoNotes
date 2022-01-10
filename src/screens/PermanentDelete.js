import React, { useRef, useState } from 'react'
import { View, TextInput, StyleSheet, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { delteNotes } from '../service/NoteService';

const PermanentDelete = ({navigation, route}) => {
    const [title, setTitle] = useState(route?.params?.editData?.title ?? '');
    
}