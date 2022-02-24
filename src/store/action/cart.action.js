export const AddToCart = (cartItem) => {
  return {
    type: "AddToCart",
    payload: cartItem,
  };
};

export const RemoveFromCart = (id) => {
  return {
    type: "RemoveFromCart",
    payload: {id: id},
  };
};

export const ClearItems = () => {
  //event
  return {
    type: "ClearItems",
    payload: [],
  };
};
export const DecreaseQuantity = (id) => {
  return{
    type:'DecreaseQuantity',
    payload:{id},
  };
};
export const IncreaseQuantity = (id) => {
  return{
    type:'IncreaseQuantity',
    payload:{id},
  };
};
