import BlogContext, { BlogProvider } from "./BlogContext";
import Layout from "./Layout";
import Header from "./Header";
import BlogInfo from "./BlogInfo";
import Posts from "./Posts";

function Blog() {
  return (
    <BlogProvider>
      <Layout>
        <Header />
        <BlogInfo />
        <Posts />
      </Layout>
    </BlogProvider>
  );
}

export default Blog;
