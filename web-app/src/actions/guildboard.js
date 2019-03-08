export const ADD_NEWS = "ADD_NEWS";
export const GET_ALL_NEWS = "GET_ALL_NEWS";
export const MARK_NEWS = "MARK_NEWS";

let newsId = 0;

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL"
};

export const addNews = newsObj => ({
  type: ADD_NEWS,
  newsId: newsId++,
  newsObj
});

export const getAllNews = () => ({
  type: GET_ALL_NEWS
});

export const markNews = id => ({
  type: MARK_NEWS,
  id
});
