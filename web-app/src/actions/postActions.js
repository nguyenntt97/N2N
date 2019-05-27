export const ADD_POST = "ADD_POST";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const MARK_POST = "MARK_POST";

// let postId = 0;

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL"
};

export const addPost = post => ({
  type: ADD_POST,
  post
});

export const getAllPosts = () => ({
  type: GET_ALL_POSTS
});

export const markPost = id => ({
  type: MARK_POST,
  id
});
