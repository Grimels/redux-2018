import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";

let i = 0;
const createID = () => ++i;

const books = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_BOOK":
      return [...state, payload];
    case "UPDATE_BOOK":
      return state.map(book => {
        if (book.id === payload.id) {
          return { ...book, name: payload.newName };
        }
        return book;
      });
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== payload.id);
    default:
      return state;
  }
};

const readers = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_READER":
      return [...state, payload];
    case "UPDATE_READER":
      return state.map(reader => {
        if (reader.id === payload.id) {
          return { ...reader, name: payload.newName };
        }
        return reader;
      });
    case "REMOVE_READER":
      return state.filter(reader => reader.id !== payload.id);
    default:
      return state;
  }
};

const reducer = combineReducers({ books, readers });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(logger))
);

const addBook = bookName => ({
  type: "ADD_BOOK",
  payload: { id: createID(), name: bookName }
});

const updateBook = (bookID, newName) => ({
  type: "UPDATE_BOOK",
  payload: { id: bookID, newName }
});

const removeBook = bookID => ({ type: "REMOVE_BOOK", payload: { id: bookID } });

const addReader = readerName => ({
  type: "ADD_READER",
  payload: { id: createID(), name: readerName }
});

const updateReader = (readerID, newName) => ({
  type: "UPDATE_READER",
  payload: { id: readerID, newName }
});

const removeReader = readerID => ({
  type: "REMOVE_READER",
  payload: { id: readerID }
});
