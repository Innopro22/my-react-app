/** @format */

import "./index.css";
import Header from "./componets/header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Dictionary from "./pages/dictionary";
import Definition from "./pages/Definitions";
import NotFound from "./componets/notFound";
function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path='/dictionary/:search' element={<Definition />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
