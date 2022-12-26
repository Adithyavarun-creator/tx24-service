import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from './pages/Dashboard/DashboardPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <DashboardPage />
      <Footer />
    </>
  )
}




export default App;