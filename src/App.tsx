import React, { useState } from "react";
import { ThemeProvider, useTheme } from "styled-components";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from './pages/Dashboard/DashboardPage';
import { GlobalStyles } from "./styles";



const App: React.FC = () => {

  const [toggle, setToggle] = useState<string>('light')




  return (
    <>
      <GlobalStyles />
      <Navbar />
      <DashboardPage />
      <Footer />

    </>
  )
}




export default App;