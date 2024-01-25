import { useEffect } from "react";
import { usePosts } from "../context/postContext";

export const HomePage = () => {
  const { getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <div>HomePage</div>
    </>
  );
};
