import React, { createContext, useState } from "react";


export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Sample Blog 1", description: "This is the first blog" },
    { id: 2, title: "Sample Blog 2", description: "This is the second blog" },
  ]);

  const addBlog = (blog) => {
    setBlogs([...blogs, { ...blog, id: blogs.length + 1 }]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
