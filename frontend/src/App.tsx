import AddEmploys from "./components/AddEmploys";
import DetailEmploys from "./components/DetailEmploys";
import EditEmploys from "./components/EditEmploys";
import EmployList from "./components/EmployList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[1240px] mx-auto mt-8">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployList />} />
          <Route path="/edit/:id" element={<EditEmploys />} />
          <Route path="/add" element={<AddEmploys />} />
          <Route path="/view/:id" element={<DetailEmploys />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
