import React, { PureComponent } from "react";
import { func, string } from "prop-types";

class Search extends PureComponent {
  static propTypes = {
    searchField: string.isRequired, //title in App.jsx
    search: func.isRequired
  };

  state = { value: "" };

  onChange = ({ target: { value } }) => {
    this.setState({ value });

    this.props.search(this.props.searchField, value);
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}

export default Search;
