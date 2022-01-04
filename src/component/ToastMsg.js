import React from 'react';
import { ToastAndroid } from 'react-native';

export const createNote = () => {
    ToastAndroid.show('Note created', ToastAndroid.SHORT);
};

