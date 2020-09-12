let initialStore = {
  app_cart: [],
  number: [],
  total: 0
}

export default (state = initialStore, action) => {
  switch (action.type) {
    case 'APP_CART': 
      return {
        ...state,
        app_cart: action.paiload.cart,
        number: action.paiload.number
      };
    case 'DELETE_ITEM': 
    return {
      ...state,
      app_cart: action.paiload.cart,
      number: action.paiload.number
    };
    case 'CHANGE_QUANTITY':
    return {
      ...state,
      number: Object.assign([], state.number.map(e => {
        if(e.id === action.paiload.id) {
          e = action.paiload;
        }
        return e;
      }))
    };
    case 'APP_NUMBER': 
    return {
      ...state,
      number: action.paiload.number
    };
    case 'TOTAL': 
    return {
      ...state,
      total: action.paiload
    };

    default:return state;
  }
}