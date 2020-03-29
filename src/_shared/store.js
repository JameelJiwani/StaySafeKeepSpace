


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

  product: {
    name: '',
    amount: '',
    description: ''
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
