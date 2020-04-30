import firebase from 'firebase';
import { updateUser, loginUserError } from '../connect/actions';

function loginUser(email, password) {
    // We can invert control here by returning a function - the "thunk".
    // When this function is passed to `dispatch`, the thunk middleware will intercept it,
    // and call it with `dispatch` and `getState` as arguments.
    // This gives the thunk function the ability to run some logic, and still interact with the store.
    return async function(dispatch) {
        try {
            const signedUpUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            console.log(signedUpUser);
            dispatch(updateUser(signedUpUser));
        } catch(error) {
            dispatch(loginUserError(error));
        }
    };
}

export default loginUser;