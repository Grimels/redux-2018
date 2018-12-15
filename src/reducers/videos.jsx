const ADD_VIDEO = "ADD_VIDEO";
const UPDATE_VIDEO = "EDIT_VIDEO";
const DELETE_VIDEO = "DELETE_VIDEO";

export default function(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_VIDEO:
      const newVideo = {
        id: payload.id,
        title: payload.title,
        url: payload.url,
        tags: payload.tags
      };
      return [newVideo, ...state];
    case DELETE_VIDEO:
      return state.filter(video => video.id !== payload.id);
    case UPDATE_VIDEO:
      return state.map(video => {
        if (video.id === payload.id) {
          return {
            ...video,
            ...payload.updatedValues
          };
        }
        return video;
      });
    default:
      return state;
  }
}

const idCounter = () => (Math.random() * Date.now()).toString();

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
