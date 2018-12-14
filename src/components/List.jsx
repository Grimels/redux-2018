import React, { PureComponent } from "react";
import { arrayOf, shape, string } from "prop-types";

import ListItem from "./ListItem";

class List extends PureComponent {
  static propTypes = {
    items: arrayOf(
      shape({
        id: string,
        title: string,
        url: string,
        tags: string
      })
    )
  };

  static defaultProps = {
    items: []
  };

  render() {
    const { items, allVideosCount, removeVideo, editVideo } = this.props;
    const list = items.map(item => {
      return (
        <ListItem
          key={item.id}
          {...item}
          deleteVideo={removeVideo}
          editVideo={editVideo}
        />
      );
    });
    return (
      <div>
        <h2>
          Videos: {items.length}\{allVideosCount}
        </h2>
        <ul className="list">{list}</ul>
      </div>
    );
  }
}

export default List;
