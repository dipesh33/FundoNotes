import auth from "@react-native-firebase/auth";
import { firebase } from "@react-native-firebase/firestore"

import AsyncStorage from "@react-native-async-storage/async-storage";

export const registration = async (email, password, fullName, callBack) => {
    try {
      const userData = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(".........................");
      firebase.firestore().collection("users").doc(userData.user.uid).set({
        FullName: fullName,
        Email: email,
      });
      console.log(userData.user.uid);
      console.log("user added");
      callBack();
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  export const handleSignin = async (email, password, callback) => {
    try {
      const userUid = await auth().signInWithEmailAndPassword(email, password);
      await AsyncStorage.setItem("uid", userUid.user.uid);
      console.log("id", (await userUid).user.uid);
      console.log("Uid stored in AsyncStorage");
      callback();
    } catch (e) {
      console.log(e.message);
    }
  };