import { ToastAndroid } from 'react-native';

export const createNote = () => {
    ToastAndroid.show('Note created', ToastAndroid.SHORT);
};

export const archiveNote = () => {
    ToastAndroid.show('Note moved to Archive', ToastAndroid.SHORT);
};

export const deleteNote = () => {
    ToastAndroid.show('Note is deleted', ToastAndroid.SHORT);
};



