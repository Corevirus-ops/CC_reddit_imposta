import { Routes, Route } from "react-router";
import Home from '../pages/home/Home';
import TopBar from '../features/topBar/TopBar';
import CreatePost from '../pages/CreatePost/CreatePost';

function App() {
  return (
    <>
    <TopBar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='post' element={<CreatePost />} /> 


{ /* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route> */}

</Routes>
</>
  );
}

export default App;
