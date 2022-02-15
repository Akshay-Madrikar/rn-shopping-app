import PRODUCTS from '../../data/dummy-data';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'), //dummy set-up for particular user products
};

export default (state = initialState, action) => {
  return state;
};
