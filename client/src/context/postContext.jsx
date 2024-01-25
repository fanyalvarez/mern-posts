import { createContext, useContext, useState } from "react";
import { getPostsRequest } from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  if (!context) throw new Error("Post Provider is missing");
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const resp = await getPostsRequest();
    console.log(resp);
  };

  return (
    <postContext.Provider value={{ posts, setPosts, getPosts }}>
      {children}
    </postContext.Provider>
  );
};
