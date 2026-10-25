import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "Learn the basics of React and components."
  },
  {
    id: 2,
    title: "Understanding React Router",
    description: "Learn how routing works in React applications."
  },
  {
    id: 3,
    title: "What is JavaScript?",
    description: "A beginner-friendly introduction to JavaScript."
  }
];

function Blog() {
  return (
    <div className="container">
      <h1>Blog Posts</h1>

      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>

          <Link to={`/blog/${post.id}`}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;