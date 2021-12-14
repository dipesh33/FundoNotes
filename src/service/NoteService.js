import firestore from "@react-native-firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage'

const getUid = async () => {
    return await AsyncStorage.getItem('uid')
}

export const addNotes = async() => {
    return firestore().collection('Datakeep').doc(uid).collection('Notes')
    .set({

    })
}



export const fetchNotes = async() => {
    const array = []
    const uid = await getUid()
    return firestore().collection('DataKeep').doc(uid).collection('Notes').get()
    .then(querySnapshot => {
        console.log('Total Notes: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
            console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            const docData = documentSnapshot.data()
            docData.noteId = documentSnapshot.id;
            arr.push(docData)
        })
        return array
    })
}