import React from "react";
import { useGetSearchQuery } from "../redux/api/keywords";
function Sentiment() {
  const { data } = useGetSearchQuery({ query: "Elvin" });
  console.log(data);
  return <div>Sentiment</div>;
}

export default Sentiment;
