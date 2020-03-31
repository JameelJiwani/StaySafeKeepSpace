// update a product
export const updateProducts = (key,value) => state => {
    let products = {};
    console.log("state----", state)
    if (typeof key === 'object') {
      const dataToAppend = key;
      products = {
        ...state.product,
        ...dataToAppend
      };
    } else {
      products = {
        ...state.products,
        [key]: value
      };
    }
    console.log("products in update", products);
    return {
      products
  };
  
}


export const updateDonation = (key, value) => state => {
  var donation = {
    ...state.donation,
    [key]:value
  }

  return donation;
}

export const updateUser = (key, value) => state => {
    let user = {};
    console.log("state----", state)
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
  
