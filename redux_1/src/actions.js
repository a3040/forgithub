export const increment = () => {
    return {
      type: 'INCREMENT'
    };
  };
  
export const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  };

  export const multiply = (value) => {
    return {
      type: 'MULTIPLY',
      payload: value
    };
  };
  
  