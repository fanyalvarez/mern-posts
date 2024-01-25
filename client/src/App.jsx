import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PostFormPage, HomePage, NotFoundPage } from "./pages/";
import { PostProvider } from "./context/postContext";

function App() {
  return (
    <>
      <PostProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/createPost" element={<PostFormPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </PostProvider>
    </>
  );
}

export default App;
