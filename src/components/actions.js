// update a product
export const updateProduct = (name, amount, description) => state => {
  return {
    product:{
      name,
      amount,
      description
    }
  }
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
  
