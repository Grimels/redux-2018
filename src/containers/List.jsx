import { connect } from "react-redux";

import { filteredVideos } from "../selectors";

import List from "../components/List";

import { deleteVideo, updateVideo } from "../reducers/videos";

const mapStateToProps = state => {
  return { items: filteredVideos(state), allVideosCount: state.videos.length };
};

const mapDispatchToProps = dispatch => ({
  removeVideo: id => dispatch(deleteVideo(id)),
  editVideo: (id, updatedValues) => dispatch(updateVideo(id, updatedValues))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
