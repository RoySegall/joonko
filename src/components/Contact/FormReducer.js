export const ADD_ERROR = 'setError';
export const RESET_ERRORS = 'resetErrors';
export const SET_ELEMENT_VALUE = 'setElement';

export const errorsReducer = (state, {type, error}) => {
  switch (type) {
    case ADD_ERROR:
      const [elementName] = Object.keys(error);
      return {
        ...state,
        ...{[`${elementName}Error`]: error[elementName]},
      }
    case RESET_ERRORS:
      return {};
    default:
      return state;
  }
};

export const valuesReducer = (state, {element, name, action = SET_ELEMENT_VALUE, newState = {}}) => {
  element.preventDefault();
  return {...state, ...{[name]: element.target.value}};
}
