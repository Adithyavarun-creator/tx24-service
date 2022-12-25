import styled from "styled-components";
import { devices } from "../../breakpoints/mediaQueries";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 10px;
  border-bottom: 2px solid darkgray;
  align-items: center;

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 8px 20px;
  }

  @media ${devices.tabletsAndIpads} {
    /* padding: 20px 20px;
    width: 100%; */
    padding: 8px 20px;
  }
  @media ${devices.smallTabs} {
    display: none;
  }
  @media ${devices.smallMobiles} {
    display: none;
  }

  .navImage {
    height: 30px;
    width: 80px;
    background-color: white;
    object-fit: fill;
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .navToggleIcon {
    height: 35px;
    width: 35px;
    cursor: pointer;
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .navuserBox {
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
    cursor: pointer;

    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .userIcon {
    height: 28px;
    width: 28px;
    color: grey;
    margin-top: 5px;

    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .navuserEmail {
    font-size: 16px;

    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }
`;

export const UserModalContainer = styled.div`
  padding: 20px 20px;
  display: flex;
  /* justify-content: flex-end; */
  /* position: relative; */

  @media ${devices.tabletsAndIpads} {
  }

  @media ${devices.smallTabs} {
    display: none;
  }
  @media ${devices.smallMobiles} {
    display: none;
  }
`;

export const UserModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  position: absolute;
  top: 58px;
  right: 0;
  background-color: white;
  border: 2px solid darkgray;
  padding: 16px 10px;
  width: 10%;
  border-radius: 20px;
  z-index: 5;

  @media ${devices.bigLaptopsAndDesktops} {
    width: 15%;
  }

  @media ${devices.tabletsAndIpads} {
    width: 20%;
  }
  @media ${devices.smallTabs} {
    display: none;
  }
  @media ${devices.smallMobiles} {
    display: none;
  }

  .modalCloseIconBox {
    position: absolute;
    top: 0;
    right: 0;
    padding: 3px 5px;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 3px 5px;
    }
    @media ${devices.tabletsAndIpads} {
      padding: 3px 5px;
    }
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .modalCloseIcon {
    height: 25px;
    width: 25px;
    color: black;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 25px;
      width: 25px;
    }
    @media ${devices.tabletsAndIpads} {
      height: 20px;
      width: 20px;
    }
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .usermodalList {
    font-size: 16px;
    color: black;
    cursor: pointer;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .modalbuyBtn {
    font-size: 18px;
    background-color: #ff1282;
    color: white;
    padding: 8px 6px;
    border-radius: 10px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
      padding: 8px 6px;
    }
    @media ${devices.tabletsAndIpads} {
      padding: 6px 6px;
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }
`;

export const MoblieNavigation = styled.nav`
  @media ${devices.bigLaptopsAndDesktops} {
    display: none;
  }
  @media ${devices.tabletsAndIpads} {
    display: none;
  }
  @media ${devices.smallTabs} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
  }
  @media ${devices.smallMobiles} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px;
  }

  .mobLogo {
    @media ${devices.smallTabs} {
      object-fit: fill;
      height: 40px;
      width: 100%;
      cursor: pointer;
    }
    @media ${devices.smallMobiles} {
      height: 30px;
      object-fit: fill;
      height: 40px;
      width: 100%;
    }
    @media ${devices.smallTabs} {
      height: 30px;
      object-fit: fill;
      height: 40px;
      width: 100%;
    }
    @media ${devices.smallMobiles} {
      height: 30px;
      object-fit: fill;
      height: 30px;
      width: 100%;
    }
  }

  .mobmenuIcon {
    @media ${devices.smallTabs} {
      color: #ff1282;
      height: 40px;
      width: 40px;
      cursor: pointer;
    }

    @media ${devices.smallMobiles} {
      height: 38px;
      width: 38px;
      color: #ff1282;
    }
  }

  .mobnavBox {
    @media ${devices.smallTabs} {
      display: flex;
      justify-content: center;
      background-color: orangered;
      flex-direction: column;
    }

    @media ${devices.smallMobiles} {
      display: flex;
      justify-content: center;
      /* background-color: orangered; */
      flex-direction: column;
    }
  }

  .mobnavList {
    /* display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 10px; */

    @media ${devices.smallTabs} {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 8px;
    }
  }
`;

export const NavModalBox = styled.div`
  @media ${devices.bigLaptopsAndDesktops} {
    display: none;
  }
  @media ${devices.tabletsAndIpads} {
    display: none;
  }
  @media ${devices.smallTabs} {
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 20px;
    padding: 20px 20px;
    border: 2px solid darkgray;
    height: 100vh;
    position: relative;
    top: -83px;
  }
  @media ${devices.smallMobiles} {
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 10px;
    padding: 20px 10px;
    border: 2px solid darkgray;
    height: 100vh;
    position: relative;
    top: -75px;
  }

  .mobnavColumns {
    @media ${devices.smallTabs} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    @media ${devices.smallMobiles} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .mobLogo {
    @media ${devices.smallTabs} {
      height: 50px;
      width: 100%;
      object-fit: fill;
    }
    @media ${devices.smallMobiles} {
      height: 40px;
      width: 100%;
      object-fit: fill;
    }
  }

  .moblightIcon {
    @media ${devices.smallTabs} {
      height: 50px;
      width: 50px;
    }
    @media ${devices.smallMobiles} {
      height: 40px;
      width: 40px;
    }
  }

  .mobcloseIcon {
    @media ${devices.smallTabs} {
      height: 50px;
      width: 50px;
      color: #ff1282;
    }
    @media ${devices.smallMobiles} {
      height: 40px;
      width: 40px;
      color: #ff1282;
    }
  }

  .mobnavLists {
    @media ${devices.smallTabs} {
      display: flex;
      flex-direction: column;
      /* justify-content: space-evenly; */
    }
    @media ${devices.smallMobiles} {
      display: flex;
      flex-direction: column;
    }
  }

  .mobnavList {
    @media ${devices.smallTabs} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 30px;
    }
    @media ${devices.smallMobiles} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
    }
  }

  .mobnavListname {
    @media ${devices.smallTabs} {
      font-weight: 300;
      font-size: 18px;
      color: #646464;
    }
    @media ${devices.smallMobiles} {
      font-weight: 300;
      font-size: 15px;
      color: #646464;
    }
  }

  .mobnavArrowicon {
    @media ${devices.smallTabs} {
      height: 20px;
      width: 20px;
      color: #646464;
    }
    @media ${devices.smallMobiles} {
      height: 20px;
      width: 20px;
      color: #646464;
    }
  }

  .mobLogoutBtnbox {
    @media ${devices.smallTabs} {
      display: flex;
      justify-content: center;
      margin-top: 50px;
    }
    @media ${devices.smallMobiles} {
      display: flex;
      justify-content: center;
      margin-top: 35px;
    }
  }

  .mobLogoutBtn {
    @media ${devices.smallTabs} {
      padding: 12px 26px;
      background-color: #ff1282;
      color: white;
      border: 2px solid #f4effe;
      outline: none;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      align-items: center;
      text-align: center;
      text-transform: capitalize;
      cursor: pointer;
    }
    @media ${devices.smallMobiles} {
      padding: 10px 20px;
      background-color: #ff1282;
      color: white;
      border: 2px solid #f4effe;
      outline: none;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      align-items: center;
      text-align: center;
      text-transform: capitalize;
      cursor: pointer;
    }
  }
`;
