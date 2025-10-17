import { Routes, Route } from "react-router";
import Home from '../components/home/Home';
import TopBar from '../components/topBar/TopBar';

function App() {
  return (
<Routes>
{  /*<Route index element={<Home />} /> */}
  <Route index element={<TopBar />} />

{ /* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route> */}

</Routes>
  );
}

export default App;
