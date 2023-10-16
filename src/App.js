import { useState } from "react";
import "./App.css";
import DataProvider from "./context/DataProvider";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
//components-
import Login from "./components/acounts/Login";
import Home from "./components/home/home";
import Header from "./components/header/header";
import CreatePost from "./components/create/CreatePost";
import DetailView from "./components/details/DetailView";
import Update from "./components/create/Update";
import About from "./components/main/About.jsx";
import Contact from "./components/contact/Contact";
import Main from "./components/main/main";
import MyBlog from "./components/MyBlog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  
  return isAuthenticated ? (
    <>
      <Header isAuthenticated={isAuthenticated}/>
      <Outlet />
    </>
  ) : (
    <>
      {/* <Header isAuthenticated={isAuthenticated} /> */}
      <Navigate replace to="/Login" />
    </>
  );
};
function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
  <>
    {/* <Header isAuthenticated={{isAuthenticated, isUserAuthenticated}} /> */}
    <DataProvider>
      <BrowserRouter>
        <div className="container" style={{ marginTop: 64 }}>
          <Routes>
            <Route>
            
            </Route>
            <Route path="/" element={<Main />} />
            <Route path="/allblogs" element={<Home/>} />
            
            <Route
              path="/Login"
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            
            

            {/* <Route path='/' element={<Main/>}/> */}

            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              {/* <Route path="/" element={<Main/>} /> */}
              {/* <Route path="/allblogs" element={<Home />} /> */}
              <Route path="/myblog" element={<MyBlog />} />
              
              <Route path="/myblog/details/:id" element={<DetailView />} />
              <Route path="/allblogs/details/:id" element={<DetailView />} />
              
              
            </Route>
            
            
            <Route
              path="/create"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/create" element={<CreatePost />} />
            </Route>
            <Route
              path="/details/:id"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/details/:id" element={<DetailView />} />
            </Route>
            <Route
              path="/update/:id"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/update/:id" element={<Update />} />
            </Route>
            <Route
              path="/about"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/about" element={<About />} />
            </Route>
            <Route
              path="/contact"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer/>
    </DataProvider>
    </>
  );
}

export default App;
