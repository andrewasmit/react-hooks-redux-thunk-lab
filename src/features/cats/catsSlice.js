export function fetchCats() {
  return function (dispatch) {
    dispatch({ type: "cats/catsLoading" });
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then((res) => res.json())
      .then((data) => {
        // Instead of console.log-ing, use dispatch to update store.
        dispatch({ type: "cats/catsLoaded", payload: data.images });
      });
  };
}

const initialState = {
  entities: [],
  status: "idle",
};

export default function catsReducer(state = initialState, action) {
  switch (action.type) {
    case "cats/loading":
      return {
        ...state,
        status: "loading",
      };
    case "cats/catsLoaded":
      return {
        ...state,
        entities: action.payload,
        status: "idle",
      };
    default:
      return state;
  }
}
