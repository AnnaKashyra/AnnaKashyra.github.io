import { useState, useEffect } from 'react';

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

function Post() {
  const [post, setPost] = useState<PostData>({
    id: 0,
    title: '',
    content: '',
    cover: '',
    authorId: 0,
    datePublished: 0,
    numComments: 0,
    likes: 0
  });
  const [likes, setLikes] = useState(0);
 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://my-json-server.typicode.com/AnnaKashyra/posts/posts');
        const postData: PostData[] = await response.json();
        setPost(postData[0]); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  function likeThis() {
    setLikes(likes + 1);
  }

  return (
    <article className="post">
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
      <div className="post-footer">
        <h3>{post.id}.{post.title}</h3>
        <p>{post.content} <a href="#">Read more...</a></p>
        <button id="like" onClick={likeThis}>
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
}

export default Post;
