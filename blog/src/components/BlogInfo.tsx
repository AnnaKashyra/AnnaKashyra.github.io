import React, { useContext } from "react";
import BlogContext from "./BlogContext";

const BlogInfo: React.FC = () => {
  const blogName = useContext(BlogContext);

  return <h1>{blogName}</h1>;
};

export default BlogInfo;
