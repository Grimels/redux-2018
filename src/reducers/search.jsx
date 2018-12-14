const UPDATE_SEARCH = "UPDATE_SEARCH";

export default function(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_SEARCH:
      const { searchField, value } = payload;
      return { ...state, [searchField]: value };
    default:
      return state;
  }
}

export const updateSearch = (searchField, value) => ({
  type: UPDATE_SEARCH,
  payload: { searchField, value }
});
