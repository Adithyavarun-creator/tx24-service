import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  )
}




export default App;