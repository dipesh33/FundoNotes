import firestore from '@react-native-firebase/firestore';

const fetchNotesFromFirestore = async uid => {
  const array = [];
  return firestore()
    .collection('keepData')
    .doc(uid)
    .collection('Notes')
    .get()
    .then(querySnapshot => {
      console.log('Total Notes: ', querySnapshot.size);
      querySnapshot.forEach(documentSnapshot => {
        //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        const docData = documentSnapshot.data();
        docData.noteId = documentSnapshot.id;
        array.push(docData);
      });
      return array;
    });
};

export default {
  fetchNotesFromFirestore,
};
