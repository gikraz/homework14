import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import BlogDetails from "./BlogDetails";
import CreateBlog from "./CreateBlog";
import { BlogProvider } from "./context/BlogContext";



function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Blogs</Link>
          <Link to="/create">Create</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
