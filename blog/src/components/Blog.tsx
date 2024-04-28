// import React from "react"; 

// class Blog extends React.Component {

//     constructor(props:any) {
//         super(props);
//         this.state = { post: props.post };
//     }

//     render() {
//        return(
//         <article className='post'>
//             <div className='cover-container'>
//               <img src={this.props.post.cover} alt={this.props.post.title} />
//             </div>
//             <div className='post-footer'>
//               <h3>{this.props.post.title} {this.props.post.id}</h3>
//               <p>{this.props.post.content}</p>
//             </div>
//         </article>
//         );
//     }
// }

const Blog = ({ post }: { post: { id: number, title: string, content: string, cover: string, likes: number } }) => {
  return (
      <article className='post'>
          <div className='cover-container'>
              <img src={post.cover} alt={post.title} />
          </div>
          <div className='post-footer'>
              <h3>{post.title} {post.id}</h3>
              <p>{post.content}</p>
          </div>
      </article>
  );
}

export default Blog;