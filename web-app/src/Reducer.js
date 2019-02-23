import {
  reloadBoard,
  VisibilityFilters,
  SET_VISIBILITY_FILTER
} from "./Actions";

const initialState = {
  willBeReload: false,
  VisibilityFilters: VisibilityFilters.SHOW_ALL,
  guild_board_data: []
};

function guildBoard(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        VisibilityFilters: action.filter
      });
    default:
      return state;
  }
}
