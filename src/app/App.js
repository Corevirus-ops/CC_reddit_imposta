import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Notifications from '../pages/notifications/Notifications';
import TopBar from '../features/topBar/TopBar';
import CreatePost from '../pages/CreatePost/CreatePost';
import { useEffect, useState } from "react";
    import { useSelector } from 'react-redux';
    import { getUser} from '../features/Auth/userSlice';


function App() {
  const [loading, setLoading] = useState(false)
      const state = useSelector(getUser)

  useEffect(() => {
  if (!state.isLoggedIn) {
    setLoading(true)
  } else if (state.isLoggedIn) {
    setLoading(false);
  }


  }, [state.isLoggedIn])



  return (
    <>
    <TopBar />
<Routes>
  <Route path='/' element={<Home loading={loading}/>} />
  <Route path='post' element={<CreatePost />} /> 
  <Route path="notifications" element={<Notifications />}/>


</Routes>
</>
  );
}

export default App;
