import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={
          {
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px"
          }
        }>Novo post</Link>
      </div>
    </nav>
  );
}