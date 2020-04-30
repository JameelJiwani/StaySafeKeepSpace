// update a product
export const updateProduct = (name, amount, description) => state => {
  return {
    product:{
      name,
      amount,
      description
    }
  }
};

// Update donation in the global state
export const updateDonation = (key, value) => state => {
  var donation = {
    ...state.donation,
    [key]:value
  };

  return donation;
};

// Update user in the global state
export const updateUser = (key, value) => state => {
  console.log('State: ', state);
  console.log('Key: ', key);
  console.log('Value: ', value);
    let user = {};
    if (typeof key === 'object') {
      const dataToAppend = key;
      user = {
        ...state.user,
        ...dataToAppend
      };
      // debugger;
    } else {
      user = {
        ...state.user,
        [key]: value
      };
    }
    console.log("user in update", user);
    return {
      user
    };
};

export const registerUser = (firstName, lastName, email, password) => state => {
  
  
};

// Update trigger of the modal
export const updateModalIsVisible = (isVisible) => state => {
  return {
    modal:{
      isVisible: !isVisible
    }
  };
};

// Push a product into array of products []
export const pushProduct = (name, payload) => state => {

  if (state.items) {
    const products = state.items.filter( e => e.name !== name);
    products.push(payload);
    const items = products;
    return {
      items
    }
  } else {
    return {
      items: [
        payload
      ]
    };
  }
};
