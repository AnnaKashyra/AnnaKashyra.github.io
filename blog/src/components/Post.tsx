import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

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

const PostContext = createContext<PostData | undefined>(undefined);

const PostProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [post, setPost] = useState<PostData>({
    id: 0,
    title: "",
    content: "",
    cover: "",
    authorId: 0,
    datePublished: 0,
    numComments: 0,
    likes: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/AnnaKashyra/posts/posts"
        );
        const postData: PostData[] = await response.json();
        setPost(postData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return <PostContext.Provider value={post}>{children}</PostContext.Provider>;
};

const Post: React.FC = () => {
  return (
    <PostProvider>
      <Layout />
    </PostProvider>
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
      <PostTitle />
    </header>
  );
};

const PostTitle: React.FC = () => {
  const post = useContext(PostContext);
  return <h2>{post ? `${post.title}` : "Loading..."}</h2>;
};

const PostMain: React.FC = () => {
  const post = useContext(PostContext);
  const [likes, setLikes] = useState(post ? post.likes : 0);

  function likeThis() {
    setLikes(likes + 1);
  }

  return (
    <div className="post-footer">
      {post ? (
        <>
          <img src={post.cover} alt={post.title} />
          <p>
            {post.content} <a href="#">Read more...</a>
          </p>
          <p>Published: {new Date(post.datePublished).toDateString()}</p>
          <p>Comments: {post.numComments}</p>
          <button id="like" onClick={likeThis}>
            Like this post <strong>{likes}</strong>
          </button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Post;
