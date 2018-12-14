import React, { PureComponent, Fragment } from "react";

const getVideoID = url => url.split("/")[3];
const createVideoURL = id => `https://www.youtube.com/embed/${id}`;

const EDIT_ON = true;
const EDIT_OFF = false;

class ListItem extends PureComponent {
  state = {
    editMode: EDIT_OFF,
    values: {
      title: this.props.title,
      tags: this.props.tags
    }
  };

  onChangeValue = ({ target: { name, value } }) => {
    this.setState(state => ({ values: { ...state.values, [name]: value } }));
  };

  changeEditMode = () => {
    this.setState(state => ({ editMode: state.editMode ? EDIT_OFF : EDIT_ON }));
  };

  render() {
    const { id, title, url, tags, deleteVideo, editVideo } = this.props;
    const videoID = getVideoID(url);

    const titleBarEditOn = (
      <Fragment>
        <div>
          <button
            className="edit-save"
            onClick={() => {
              editVideo(id, {
                title: this.state.values.title,
                tags: this.state.values.tags
              });
              this.changeEditMode();
            }}
          >
            OK
          </button>
          <button className="edit-cancel" onClick={this.changeEditMode}>
            Cancel
          </button>
        </div>
        <input
          className="list-item-title"
          type="text"
          name="title"
          value={this.state.values.title}
          onChange={this.onChangeValue}
        />
      </Fragment>
    );

    const titleBarEditOff = (
      <Fragment>
        <button className="edit" onClick={this.changeEditMode}>
          &#9998;
        </button>
        <span className="list-item-title">{title}</span>
      </Fragment>
    );

    const tagsEditOn = (
      <input
        type="text"
        name="tags"
        value={this.state.values.tags}
        onChange={this.onChangeValue}
      />
    );

    const tagsEditOff = tags.split(/\s*,\s*/).map(tag => {
      return (
        <div key={(Math.random() * Date.now()).toString()} className="tag">
          {tag}
        </div>
      );
    });

    return (
      <li key={id} className="list-item">
        <div className="item-title">
          {this.state.editMode ? titleBarEditOn : titleBarEditOff}
          <button onClick={() => deleteVideo(id)} className="close">
            &times;
          </button>
        </div>
        <iframe title={title} src={createVideoURL(videoID)} frameBorder="0" />
        <div className="tags">
          {this.state.editMode ? tagsEditOn : tagsEditOff}
        </div>
      </li>
    );
  }
}

export default ListItem;
