import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import modal from './Modal';

const getUid = async () => {
    return await AsyncStorage.getItem('uid');
};

// export const storeNotes = async (noteData, routingCallback, noteId) => {
//     const uid = await getUid();
//     console.log(uid);
//     return firestore()
//         .collection('keepData')
//         .doc(uid)
//         .collection('Notes')
//         .add({
//             ...noteData,
//         }).then(() => {
//             routingCallback();
//             console.log('data added');
//         });
// };


export const fetchNotes = async() => {
    const uid = await getUid();
    console.log('UID: ', uid);
    return await modal.fetchNotesFromFirestore(uid);
    };

export const fetchArchiveData = async() => {
    const array = [];
    const uid = await getUid();
    return firestore().collection('keepData').doc(uid).collection('Notes')
    .get()
    .then(querySnapshot => {
        // console.log(querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
            // console.log('User ID : ', documentSnapshot.id, documentSnapshot.data());
            const docData = documentSnapshot.data();
            if (docData.isArchive){
                docData.noteId = documentSnapshot.id;
                array.push(docData);
                //console.log('Archive Data', array);
            }
        });
        return array;
    });
};

export const fetchDeleteData = async() => {
    const array = [];
    const uid = await getUid();
    return firestore().collection('keepData').doc(uid).collection('Notes')
    .where('isDelete', '==', true)
    .get()
    .then(querySnapshot => {
        // console.log(querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
            // console.log('UserID: ', querySnapshot.id, documentSnapshot.data());
            const docData = documentSnapshot.data();
            docData.noteId = documentSnapshot.id;
            array.push(docData);
        });
        return array;
    });
};

export const addUpdateNote = async(noteData, op, callback, noteId) => {
    const uid = await getUid();
    // console.log(uid);
    const data = firestore().collection('keepData').doc(uid);
    let ref;
    if (op === 'add'){
        ref = data.collection('Notes');
        // console.log('Notes Added');
    }
    else {
        ref = data.collection('Notes').doc(noteId);
    }
    ref[op](noteData).then(() => {
        callback?.();
    });
};

export const delteNotes = async (noteId) => {
    const uid = await getUid();
    firestore()
    .collection('keepData')
    .doc(uid)
    .collection('Notes')
    .doc(noteId)
    .delete()
    .then(() => {
        // console.log('note deleted');
    });
};
