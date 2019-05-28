import fetch from "cross-fetch";

export const ADD_POST = "ADD_POST";
export const MARK_POST = "MARK_POST";
export const REQUEST_POST = "REQUEST_POST";
export const RECEIVE_POST = "RECEIVE_POST";

// let postId = 0;

export const requestPosts = category => ({
  type: REQUEST_POST,
  category
});

export const receivePosts = (category, json) => {
  console.log(Object.assign({}, json));
  return {
    type: RECEIVE_POST,
    category,
    posts: json,
    receivedAt: Date.now()
  };
};

export function fetchPosts(category) {
  return dispatch => {
    dispatch(requestPosts(category));
    return fetch(`http://localhost:8080/topics`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(category, json)));
  };
}

// export const VisibilityFilters = {
//   SHOW_ALL: "SHOW_ALL"
// };

// export const addPost = post => ({
//   type: ADD_POST,
//   post
// });

// export const getAllPosts = () => ({
//   type: GET_ALL_POSTS
// });

// export const markPost = id => ({
//   type: MARK_POST,
//   id
// });
