import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Form extends PureComponent {
  static propTypes = {
    add: PropTypes.func.isRequired
  };

  state = {
    title: "",
    url: "",
    tags: ""
  };

  onAdd = () => {
    this.props.add(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ url: "", title: "", tags: "" });
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={this.state.title}
            id="title"
            name="title"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL</label>
          <input
            type="text"
            value={this.state.url}
            id="url"
            name="url"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            value={this.state.tags}
            id="tags"
            name="tags"
            onChange={this.onChange}
          />
        </div>
        <button onClick={() => this.onAdd(this.state)}>ADD</button>
      </div>
    );
  }
}

export default Form;
