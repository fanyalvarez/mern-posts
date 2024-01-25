import { usePosts } from "../context/postContext";

export const HomePage = () => {
  const {setPost, post} = usePosts();
  console.log(post);

  
  return (
    <>
      <div>HomePage</div>
      <button className="bg-red-400 p-2" onClick={()=>{setPost([1,2,3])}}>Add</button>
    </>
  );
};
