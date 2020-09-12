let initialStore = {
  data: {
    name: '',
    email: '',
    address: '',
    phone: ''
  },
  valid: {
    name: '',
    email: '',
    address: '',
    phone: ''
  },
  option: [
    'Free shipping',
    'Express shipping',
    'Courier shipping'
  ],
  privilege: ['Free express shipping'],
  option_key: {
    display: false, 
    key: 'Free shipping'
  },
  message_error: {
    name: '',
    email: '',
    address: '',
    phone: false
  },
  valid_color: {
    name: '',
    email: '',
    address: '',
    phone: ''
  }
}

export default (state = initialStore, action) => {
  switch (action.type) {
    case 'MAIL_INPUT':
      return ({
        ...state,
        data: { ...state.data, email: action.paiload }
      });
    case 'ENTER_ADDRESS':
      return ({
        ...state,
        data: { ...state.data, address: action.paiload }
      });
    case 'PHONE_INPUT':
      return ({
        ...state,
        data: { ...state.data, phone: action.paiload }
      });
    case 'NAME_INPUT':
      return ({
        ...state,
        data: { ...state.data, name: action.paiload }
      });
    case 'VALID_EMAIL':
      return ({
        ...state,
        valid: {...state.valid, email: action.paiload.valid_email},
        message_error: {...state.message_error, email: action.paiload.message},
        valid_color: {...state.valid_color, email: action.paiload.color}
      });
    case 'VALID_NAME':
      return ({
        ...state,
        valid: {...state.valid, name: action.paiload.text},
        message_error: {...state.message_error, name: action.paiload.message},
        valid_color: {...state.valid_color, name: action.paiload.color}
      });
      case 'VALID_ADDRESS':
        return ({
          ...state,
          valid: {...state.valid, address: action.paiload.text},
          message_error: {...state.message_error, address: action.paiload.message},
          valid_color: {...state.valid_color, address: action.paiload.color}
        });
      case 'VALID_PHONE':
        return ({
          ...state,
          valid: {...state.valid, phone: action.paiload.valid_phone},
          message_error: {...state.message_error, phone: action.paiload.message},
          valid_color: {...state.valid_color, phone: action.paiload.color}
        });
        case 'SECTION_SELECTION':
        return ({
          ...state,
          option_key: {...state.option_key, key: action.paiload}
        });
        case 'OPEN/CLOSE':
        return ({
          ...state,
          option_key: {...state.option_key, display: action.paiload}
        });
        case 'PRIVILEGE':
        return ({
          ...state,
          option: action.paiload
        });
        case 'APP_KEY':
        return ({
          ...state,
          option_key: { ...state.option_key, key: action.paiload}
        });
        case 'CLEANING':
          return ({
            ...state,
            data: { ...state.data, name: '',
                                   email: '',
                                   address: '',
                                   phone: ''
            }
          });
    default: return state;
  }

}