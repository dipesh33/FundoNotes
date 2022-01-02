import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUid = async () => {
  return await AsyncStorage.getItem('uid');
};

export const addLabel = async labelData => {
  const uid = await getUid();
  return firestore()
    .collection('keepData')
    .doc(uid)
    .collection('Labels')
    .add(labelData)
    .then(() => {
      console.log('Label added!');
    });
};

export const updateLabel = async (labelData, labelId) => {
  const uid = await getUid();
  return firestore()
    .collection('keepData')
    .doc(uid)
    .collection('Labels')
    .doc(labelId)
    .update(labelData)
    .then(() => {
      console.log('Label Updated!');
    });
};

export const fetchLabelsData = async () => {
  const array = [];
  const uid = await getUid();
  return firestore()
    .collection('keepData')
    .doc(uid)
    .collection('Labels')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const docData = documentSnapshot.data();
        docData.labelId = documentSnapshot.id;
        array.push(docData);
      });
      return array;
    });
};

export const deleteLabel = async labelId => {
  const uid = await getUid();
  return firestore()
    .collection('keepData')
    .doc(uid)
    .collection('Labels')
    .doc(labelId)
    .delete()
    .then(() => {
      console.log('label deleted');
    });
};
