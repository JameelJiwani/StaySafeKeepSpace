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
  }

  return donation;
};

// Update user in the global state
export const updateUser = (key, value) => state => {
    let user = {};
    if (typeof key === 'object') {
      const dataToAppend = key;
      user = {
        ...state.user,
        ...dataToAppend
      };
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
