import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 20px;
  border-bottom: 2px solid lightgray;

  .navImage {
    height: 30px;
    width: 80px;
    background-color: white;
    object-fit: fill;
  }

  .navuserBox {
    display: flex;
    align-items: center !important;
    gap: 2px;
    cursor: pointer;
  }

  .userIcon {
    height: 30px;
    width: 30px;
    color: grey;
  }

  .navuserEmail {
    font-size: 12px;
    /* font-weight: bolder; */
  }
`;
