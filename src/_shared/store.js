import * as productAction from '../components/actions';


export default {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    type: '',
    id: '',
    loggedIn: false,
    loading: false
  },

  products: { 
    "Face Masks": {
    isSet: false,
    amount: '',
    description: ''
    },
    "Goggles and Gloves": {
    isSet: false,
    amount: '',
    description: ''
    },
    "Full Body Suits": {
    isSet: false,
    amount: '',
    description: ''
    },
    "Hand Sanitizers": {
    isSet: false,
    amount: '',
    description: ''
    }
  },

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
  },


  ...productAction
  
}
