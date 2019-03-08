import { VisibilityFilters, markNews } from "../actions/guildboard";
import { connect } from "react-redux";
import GuildBoard from "../comps/widgets/GuildBoard";

const getNewsList = news => {
  // switch (filter) {
  // case VisibilityFilters.SHOW_ALL:
  //   return news;
  // default:
  //   return news;
  // }
  console.log("hahahahahahah", news);
  return news;
};

const mapStateToProps = state => ({
  data: getNewsList(state.news)
});

const mapDispatchToProps = dispatch => ({
  markNews: id => dispatch(markNews(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuildBoard);
