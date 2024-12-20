import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "./context/BlogContext";


function HomePage() {
  const { blogs } = useContext(BlogContext);

  return (
    <div>
      <h1>Blogs</h1>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.description.substring(0, 50)}...</p>
            <Link to={`/blog/${blog.id}`}>Show More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
