import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { NewPost } from "./components/NewPost";
import { BlogPost } from "./components/BlogPost";
import { EditPost } from "./components/Editpost";

export function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<NewPost />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="edit/:id" element={<EditPost/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )

}
