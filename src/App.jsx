import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./components/layouts/RootLayout";
import { Home } from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
