const ADD_VIDEO = "ADD_VIDEO";
const UPDATE_VIDEO = "EDIT_VIDEO";
const DELETE_VIDEO = "DELETE_VIDEO";

export default function(state = [], action) {
  if (localStorage.getItem("redux-video")) {
    state = JSON.parse(localStorage.getItem("redux-video"));
  }
  const { type, payload } = action;
  let buffer;

  switch (type) {
    case ADD_VIDEO:
      console.log(window.localStorage.getItem("redux-storage-test11"));

      const newVideo = {
        id: payload.id,
        title: payload.title,
        url: payload.url,
        tags: payload.tags
      };
      buffer = [newVideo, ...state];
      localStorage.setItem("redux-video", JSON.stringify(buffer));
      return buffer;
    case DELETE_VIDEO:
      buffer = state.filter(video => video.id !== payload.id);
      localStorage.setItem("redux-video", JSON.stringify(buffer));
      return buffer;
    case UPDATE_VIDEO:
      buffer = state.map(video => {
        if (video.id === payload.id) {
          return {
            ...video,
            ...payload.updatedValues
          };
        }
        return video;
      });
      localStorage.setItem("redux-video", JSON.stringify(buffer));
      return buffer;
    default:
      return state;
  }
}

let idCounter = () => (Math.random() * Date.now()).toString();

export const addVideo = ({ title, url, tags }) => ({
  type: ADD_VIDEO,
  payload: { id: idCounter(), title, url, tags }
});

export const deleteVideo = id => ({
  type: DELETE_VIDEO,
  payload: { id }
});

export const updateVideo = (id, updatedValues) => ({
  type: UPDATE_VIDEO,
  payload: { id, updatedValues }
});
