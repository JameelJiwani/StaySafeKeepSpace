import produce from 'immer';

import * as constants from './constants';

export const initialState = {
    loading: false,
    loggedIn: false,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        type: '',
        id: '',
    },
    product: {
        name: '',
        amount: '',
        description: ''
    },
    modal: {
        isVisible: false,
        isSame: false,
    },
    items: [],
    donation: {
        products: [],
        ownerIn: '',
        donationId: '',
        receiverId: '',
        loading: false,
        address: '',
        city: '',
        zip: '',
        country: ''
    }
};


function reducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case constants.LOGIN_USER:
                draft.loading = true;
                return;
            case constants.UPDATE_USER:
                draft.user = action.user;
                draft.loading = false;
                return;
            case constants.LOGIN_ERROR:
                draft.error = action.error;
                draft.loading = false;
                break;
            case constants.CLEAR_ERROR:
                draft.error = null;
                break;
            default:
        }
    });
}

export default reducer();
