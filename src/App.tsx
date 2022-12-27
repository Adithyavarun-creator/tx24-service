import React, { useState } from "react";
import { ThemeProvider, useTheme } from "styled-components";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { darkTheme } from "./components/ThemeProvider/ThemeProvider";
import DashboardPage from './pages/Dashboard/DashboardPage';
import { GlobalStyles } from "./styles";



const App: React.FC = () => {

  const [toggle, setToggle] = useState<boolean>(false)



  const darkTheme: darkTheme = {
    body: "#1c1c1c",
  };

  const lightTheme: darkTheme = {
    body: "#00FF7F",
  };


  // const handleToggle = (): void => {
  //   setToggle(!toggle)
  // }

  // const darkTheme = {
  //   body: "#1c1c1c",
  //   title: "#fff",
  //   subtitle: "#b6b6b6",
  //   icon: "#b6b6b6",
  // };
  // const lightTheme = {
  //   body: "#fff",
  //   title: "#1c1c1c",
  //   icon: "#1c1c1c",
  //   subtitle: "#333",
  // };


  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Navbar />
        <DashboardPage />
        <Footer />
      </ThemeProvider>

    </>
  )
}




export default App;