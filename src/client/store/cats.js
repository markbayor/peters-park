import axios from "axios";

// ACTION TYPES
// YOU MAKE THEM!!
const LOAD_CATS = "LOAD_CATS";

// INITIAL STATE
// what would be a good initial state?
// :thinking:

const initialState = [];

// ACTION CREATORS
export const loadCats = data => ({
  // some stuff might go in here? hmmmmm.....
  type: LOAD_CATS,
  cats: data
});

// THUNK CREATORS
export const fetchCats = () => async dispatch => {
  // YOUR CODE HERE
  const cats = (await axios.get(`/api/cats/`)).data;
  return dispatch(loadCats(cats));
};

// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case LOAD_CATS:
      state = action.cats;
      return state;
  }
}
