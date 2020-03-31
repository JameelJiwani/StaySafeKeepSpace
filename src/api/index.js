import firebase from '../firebase';

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

// Retrive user info from firestore
export const getUser = async uid => {
  try{
    const data = await db
    .doc(`users/${uid}`)
    .get();

    return {
      ...data.data(),
      uid: uid
    }
  } catch (err) {
    console.log('error getUser', err);
  }
};

// Create an donation
export const createDonation = async (payload) => {
  try {
    const user = await firebase.auth().currentUser;
    return await db
      .collection('donations')
      .add({
        ...payload,
        status: 'open',
        ownerId: user.uid,
        createdAt: timestamp,
        updatedAt: timestamp
      });
  } catch (err) {
    console.log("err createDonation", err);
  }
};
