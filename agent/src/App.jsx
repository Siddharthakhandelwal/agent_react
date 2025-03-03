import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import DoctorForm from "./components/DoctorForm";
import RealEstateForm from "./components/RealEstateForm";

function App() {
  return (
    <Router>
      <nav>
        <ul className="flex space-x-4 justify-center p-4 bg-gray-200">
          <li>
            <Link to="/" className="text-blue-500 hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/doctor" className="text-blue-500 hover:underline">
              Doctor
            </Link>
          </li>
          <li>
            <Link to="/real-estate" className="text-blue-500 hover:underline">
              Real Estate
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/doctor" element={<DoctorForm />} />
          <Route path="/real-estate" element={<RealEstateForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
