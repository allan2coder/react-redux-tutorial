/**
 * Created by Allan on 2017/12/20.
 */
// import { createAction } from "redux-actions"; // 在sotre中存state需要创建
import cFetch from "../../utils/cFetch";
import API from "../../config/api";
const { LOGIN } = API;

// 先创建一个action
// const getUserInfo = createAction("GET_USERINFO");

export const loginUser = () => dispatch => {
  return cFetch(
    LOGIN,
    Object.assign(
      {
        method: "GET"
      },
      process.env.NODE_ENV === "production" ? {} : { credentials: "omit" }
    )
  ).then(res => {
    console.log(res, 555);
  });
};
