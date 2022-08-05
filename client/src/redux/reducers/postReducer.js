const postReducer = (
  state = { posts: null, loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, uploading: true, error: false };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    case "RETRIEVING_START":
      return { ...state, loading: true, error: false };
    case "RETRIEVING_SUCCESS":
      return { ...state, posts: action.data, loading: false, error: false };
    case "RETRIEVING_FAIL":
      return { ...state, loading: false, error: true };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.data),
      };
    default:
      return state;
  }
};

export default postReducer;
