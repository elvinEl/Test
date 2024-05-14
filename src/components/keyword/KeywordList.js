import React from "react";
import { useGetTopicsQuery } from "../../redux/api/keywords";
import { getToken } from "../auth/token/getToken";
import Logout from "../auth/logout/Logout";
import { NavLink } from "react-router-dom";
function KeywordList() {
  const elvin = getToken();
  console.log(elvin);
  const { data: topicsList } = useGetTopicsQuery();
  console.log(topicsList && topicsList.data);
  return (
    <div>
      KeywordList
      <Logout />
      <NavLink to="/about">About page</NavLink>
    </div>
  );
}

export default KeywordList;
