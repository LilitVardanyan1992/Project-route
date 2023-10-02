import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Homepage from "./pages/Homepage";
import Notfoundpage from "./pages/Notfoundpage";
import SInglePage from './pages/SInglePage';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

import Layout from './component/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<SInglePage />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="posts/new" element={<CreatePost />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>

      </Routes>

    </>
  );
}

export default App;
