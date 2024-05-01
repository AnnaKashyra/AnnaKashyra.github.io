import React, { createContext, ReactNode } from "react";

interface BlogContextProps {
  children?: ReactNode;
}

const BlogContext = createContext<string>("");

export const BlogProvider: React.FC<BlogContextProps> = ({ children }) => {
  const blogName = "Мій блог";

  return <BlogContext.Provider value={blogName}>{children}</BlogContext.Provider>;
};

export default BlogContext;
