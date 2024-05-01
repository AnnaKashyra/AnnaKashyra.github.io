import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Post from "./Post";

interface PostData {
  id: number;
  title: string;
  content: string;
  cover: string;
  authorId: number;
  datePublished: number;
  numComments: number;
  likes: number;
}

const PostsContext = createContext<PostData[]>([]);

const PostsProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/AnnaKashyra/posts/posts"
        );
        const postData: PostData[] = await response.json();
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>;
};

const Posts: React.FC = () => {
  return (
    <PostsProvider>
      <Layout />
    </PostsProvider>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <PostMain />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="header">
      <h2>About Lorem ipsum</h2>
    </header>
  );
};

const PostMain: React.FC = () => {
  const posts = useContext(PostsContext);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <Post post={post} />
          </div>
        ))
      ) : (
        "Loading..."
      )}
    </div>
  );
};


export default Posts;
