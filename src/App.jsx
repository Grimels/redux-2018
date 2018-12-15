import React, { Component } from "react";
import List from "./containers/List";
import Form from "./containers/Form";
import Search from "./containers/Search";
import { Provider } from "react-redux";
import storeCreator from "./store";
import { loadState, saveState } from "./localStorage";
let store = storeCreator(loadState());

store.subscribe(() => {
  saveState(store.getState());
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        search by title
        <Search searchField="title" />
        search by tags
        <Search searchField="tags" />
        <Form />
        <List />
      </Provider>
    );
  }
}

export default App;
