import { useParams, Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    content:
      "React is a JavaScript library used for building user interfaces."
  },
  {
    id: 2,
    title: "Understanding React Router",
    content:
      "React Router allows us to create multiple pages and navigation in a React application."
  },
  {
    id: 3,
    title: "What is JavaScript?",
    content:
      "JavaScript is a programming language commonly used to make websites interactive."
  }
];

function Post() {
  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div className="container">
        <h1>Post Not Found</h1>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <Link to="/blog">← Back to Blog</Link>
    </div>
  );
}

export default Post;