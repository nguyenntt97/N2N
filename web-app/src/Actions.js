export const RELOAD_BOARD = "RELOAD_BOARD";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_UNREAD: "SHOW_UNREAD",
  SHOW_READ: "SHOW_READ"
};

export function setBoardVisibilityFilterUnread() {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: SHOW_UNREAD
  };
}

export function reloadBoard() {
  return { type: RELOAD_BOARD };
}
