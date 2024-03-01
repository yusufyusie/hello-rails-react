const greetingReducer = (state = '', action) => {
    switch (action.type) {
      case 'FETCH_GREETING':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default greetingReducer;