import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Notifications from '../pages/notifications/Notifications';
import TopBar from '../features/topBar/TopBar';
import CreatePost from '../pages/CreatePost/CreatePost';

function App() {
  return (
    <>
    <TopBar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='post' element={<CreatePost />} /> 
  <Route path="notifications" element={<Notifications />}/>


{ /* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route> */}

</Routes>
</>
  );
}

export default App;
