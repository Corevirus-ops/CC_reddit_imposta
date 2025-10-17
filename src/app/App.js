import { Routes, Route } from "react-router";
import Home from '../components/home/Home';

function App() {
  return (
<Routes>
  <Route index element={<Home />} />

{ /* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route> */}

</Routes>
  );
}

export default App;
