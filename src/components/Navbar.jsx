import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>My Blog</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;