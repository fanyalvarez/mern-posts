import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PostFormPage, HomePage, NotFoundPage } from "./pages/";
import { PostContex } from "./context/PostContex";

function App() {
  return (
    <>
      <PostContex>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/createPost" element={<PostFormPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </PostContex>
    </>
  );
}

export default App;
