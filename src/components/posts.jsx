import React from "react";
import queryString from "query-string";
import { useLocation, useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const location = useLocation();
  const result = queryString.parse(location.search);
  console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      Year: {params.year} , Month: {params.month}
    </div>
  );
};

export default Posts;
