import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-neutral-700 text-white text-xl font-bold p-4">
      <div className="flex justify-between ">
        <h1>Post App</h1>
        <ul className="flex justify-between">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/createPost">Add Task</Link></li>
        </ul>
      </div>
    </nav>
  );
}
