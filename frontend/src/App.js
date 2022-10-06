import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/GeneralCSS/main.css";
import Home from './Components/Home/Home';
import Blogs from './Components/Blog/Blog';
import BlogPage from './Components/Blog/BlogPage';
import UniProfile from './Components/UniversityProfile/UniProfile';
import Studentlog from "./loginsignup/login";
import StudentSign from "./loginsignup/signin";
import StudentForgot from "./loginsignup/forgot1";
import Mainchat from "./Components/chatComp/mainchat";
import Developerlogin from "./Components/loginsigninuser/login";
import Developersignin from "./Components/loginsigninuser/signin";
import Developerforgot from "./Components/loginsigninuser/forgot1";
import Login from "./Components/loginsigninuser/login";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>} />
      <Route index path="/blog" element={<Blogs/>} />
      <Route index path="/blogpage" element={<BlogPage/>} />
      <Route index path="/mentorpage" element={<UniProfile/>} />
      
      <Route exact path="/login" element={<Login />}></Route>

      <Route exact path="/slogin" element={<Studentlog />}></Route>
      <Route exact path="/ssignin" element={<StudentSign />}></Route>
      <Route exact path="/sforgot" element={<StudentForgot />}></Route>

      <Route exact path="/login" element={<Developerlogin />}></Route>
      <Route exact path="/signin" element={<Developersignin />}></Route>
      <Route exact path="/forgot" element={<Developerforgot />}></Route>
      <Route exact path="/chat/:to" element={<Mainchat />}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;