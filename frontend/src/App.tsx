import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Application Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>

          {/* <Route path="*" >
          <div>404</div>
        </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
