
import firebase from '../firebase';



const db = firebase.firestore();


export const getUser = async uid => {
  try{
    const data = await db
    .doc(`users/${uid}`)
    .get();
    console.log("get from api", data.data());
    return {
      ...data.data(),
      id: uid
    }
  } catch (err) {
    console.log('error getUser', err);
  }

}
