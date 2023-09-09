import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, loadUser } from "./redux/actions/user";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import Achivements from "./components/Admin/Achivements";
import Projects from "./components/Admin/Projects";
import Loading from "./components/Loaders/Loading";
import { StarsCanvas } from "./components/canvas";
function App() {
  const dispatch = useDispatch();

  const { isAdmin } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
     {
      loading? <Loading /> :
      (
        <>
         <Header />
      <Routes>
        <Route path={"/"} element={<Home timeline={user.timeline} achivements={user.achivements} skills={user.skills} />} />
        <Route path={"/about"} element={<About about={user.about}/>} />
        <Route path={"/project"} element={<Project projects={user.projects} />} />
        <Route path={"/contact"} element={
       <div className=" relative z-0">
         <Contact />
         <StarsCanvas/>
       </div>
       } />
       <Route
          path={"/Account"}
          element={ <Login />}
        />
        <Route
          path={"/admin"}
          element={isAdmin ? <AdminPanel /> : <Login />}
        />
        <Route
          path={"/admin/timeline"}
          element={isAdmin ? <Timeline /> : <Login />}
        />
        <Route
          path={"/admin/achivements"}
          element={isAdmin ? <Achivements /> : <Login />}
        />
        <Route
          path={"/admin/projects"}
          element={isAdmin ? < Projects/> : <Login />}
        />
      </Routes>
     
      <Footer />
        </>
      )
     }
    </Router>
  );
}

export default App;
