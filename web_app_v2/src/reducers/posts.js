import { REQUEST_POST, RECEIVE_POST } from "../actions/postActions";

// const initial_state = {
//   selectedCategory: "General",
//   entities: {
//     posts: {
//       2: {
//         id: 2,
//         title: "RE-ZERO chương 16",
//         author: "hungtb96",
//         time: "3 tiếng trước",
//         comments: "26 bình luận",
//         link: "re-zero",
//         followers: {
//           followList: [
//             { ava: "/sample-ava.jpg" },
//             { ava: "/sample-ava.jpg" },
//             { ava: "/sample-ava.jpg" },
//             { ava: "/sample-ava.jpg" },
//             { ava: "/sample-ava.jpg" }
//           ],
//           total: 7
//         }
//       },
//       3: {
//         id: 3,
//         title: "KONOSUBA chương 15",
//         author: "hungtb96",
//         time: "5 tiếng trước",
//         comments: "21 bình luận",
//         link: "konosuba",
//         followers: {
//           followList: [
//             { ava: "/sample-ava.jpg" },
//             { ava: "/sample-ava.jpg" },
//             { ava: "/sample-ava.jpg" },
//             { ava: "/sample-ava.jpg" },
//             { ava: "/sample-ava.jpg" }
//           ],
//           total: 7
//         }
//       }
//     }
//   },
//   postsByCategories: {
//     frontend: {
//       isFetching: false,
//       didInvalidate: false,
//       items: []
//     },
//     reactjs: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1223232323,
//       items: [2, 3]
//     }
//   }
// };

const post_initial = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

const posts = (state = post_initial, action) => {
  switch (action.type) {
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receiveAt
      });
    default:
      return state;
  }
};

const postsByCategories = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POST:
    case RECEIVE_POST:
      return Object.assign({}, state, {
        [action.category]: posts(state[action.category], action)
      });

    default:
      return state;
  }
};

export default postsByCategories;
