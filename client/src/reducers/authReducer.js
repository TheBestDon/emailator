const initialState = {};

export default (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    default:
      return state;
  }
};
