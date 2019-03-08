import { VisibilityFilters, markPost } from "../actions/postActions";
import { connect } from "react-redux";
import WdPostBoard from "../comps/widgets/WdPostBoard";

const getPostsList = posts => {
  // switch (filter) {
  // case VisibilityFilters.SHOW_ALL:
  //   return news;
  // default:
  //   return news;
  // }
  return posts;
};

const mapStateToProps = state => ({
  data: getPostsList(state.posts)
});

const mapDispatchToProps = dispatch => ({
  markPost: id => dispatch(markPost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WdPostBoard);
