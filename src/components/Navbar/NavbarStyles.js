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

  .navImage {
    height: 30px;
    width: 80px;
    background-color: white;
    object-fit: fill;
  }

  .navToggleIcon {
    height: 35px;
    width: 35px;
    cursor: pointer;
  }

  .navuserBox {
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
    cursor: pointer;
  }

  .userIcon {
    height: 28px;
    width: 28px;
    color: grey;
    margin-top: 5px;
  }

  .navuserEmail {
    font-size: 16px;
  }
`;

export const UserModalContainer = styled.div`
  padding: 20px 20px;
  display: flex;
  /* justify-content: flex-end; */
  /* position: relative; */

  @media ${devices.tabletsAndIpads} {
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
  }
`;
