// For adding item to the Cart
export const addcart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For deleting item from the Cart
export const delcart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const totalBill = (product) => {
  return {
    type: "TOTALAMOUNT",
    payload: product,
  };
};

export const removeItem = (product) => {
  return {
    type: "REMOVEITEM",
    payload: product,
  };
};