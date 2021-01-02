import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonserver";
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: Math.floor(Math.random() * 9999),
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "edit_blogpost":
      return state.map((blogPosts) => {
        return blogPosts.id === action.payload.id ? action.payload : blogPosts;
      });
    case "get_blogposts":
      return action.payload;
    default:
      return state;
  }
};
const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    // response.data === [{},{}]
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};
const AddblogPosts = (dispatch) => {
  // return (title, content, callback) => {
  //   dispatch({ type: "add_blogpost", payload: { title, content } });
  //   if (callback) callback(); // go back to the Index Screen from Create Screen
  // };
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    if (callback) {
      callback();
    }
  };
};
const DeleteblogPosts = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const EditblogPosts = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blogpost", payload: { title, content, id } });
    if (callback) callback();
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { AddblogPosts, DeleteblogPosts, EditblogPosts, getBlogPosts },
  []
);
