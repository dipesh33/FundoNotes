import firestore from "@react-native-firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage'

const getUid = async () => {
    return await AsyncStorage.getItem('uid')
}

export const storeNotes = async (noteData, routingCallback, noteId) => {
    const uid = await getUid() 
    console.log(uid);
    return firestore()
        .collection('keepData')
        .doc(uid)
        .collection('Notes')
        .add({
            ...noteData
        }).then(() => {
            routingCallback()
            console.log("data added");
        })
}


export const fetchNotes = async() => {
    const array = []
    const uid = await getUid()
    console.log("UID: ", uid);
    return firestore().collection('keepData').doc(uid).collection('Notes').get()
    .then(querySnapshot => {
        console.log('Total Notes: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
            console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            const docData = documentSnapshot.data()
            docData.noteId = documentSnapshot.id;
            array.push(docData)
        });
        console.log("Array:",array)
        return array
    })
}

export const fetchArchiveData = async() => {
    const array = []
    const uid = await getUid()
    return firestore().collection('keepData').doc(uid).collection('Notes')
    .get()
    .then(querySnapshot => {
        console.log(querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
            console.log('User ID : ', documentSnapshot.id, documentSnapshot.data());
            const docData = documentSnapshot.data()
            if(docData.isArchive){
                docData.noteId = documentSnapshot.id,
                array.push(docData)
                console.log("Archive Data", array);
            }
        })
        return array;
    })
}

export const fetchDeleteData = async() => {
    const array = []
    const uid = await getUid()
    return firestore().collection('keepData').doc(uid).collection('Notes')
    .get()
    .then(querySnapshot => {
        console.log(querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
            console.log('UserID: ', querySnapshot.id, documentSnapshot.data());
            const docData = documentSnapshot.data();
            if(docData.isDelete){
                docData.noteId = documentSnapshot.id,
                array.push(docData);
                console.log("Delete Data:", array);
            }
        })
        return array;
    })
}