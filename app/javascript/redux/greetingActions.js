export const fetchGreeting = () => async (dispatch) => {
    const response = await fetch('/api/greetings/random');
    const data = await response.json();
  
    dispatch({
      type: 'FETCH_GREETING',
      payload: data,
    });
  };