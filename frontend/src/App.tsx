import AddEmploys from "./components/AddEmploys";
import EditEmploys from "./components/EditEmploys";
import EmployList from "./components/EmployList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[1140px] mx-auto mt-8">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployList />} />
          <Route path="/edit/:id" element={<EditEmploys />} />
          <Route path="/add" element={<AddEmploys />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
