import React from "react";
import { useGetTopicsQuery } from "../../redux/api/apiRequest";
function KeywordList() {
  const { data: topicsList } = useGetTopicsQuery();
  console.log(topicsList && topicsList.data);
  return <div>KeywordList</div>;
}

export default KeywordList;
