import React, { createContext, useContext, useState } from "react";

const postContext = createContext();
export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState([]);

  return (
    <postContext.Provider value={{ post, setPost }}>
      {children}
    </postContext.Provider>
  );
};
