import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
  border-bottom: 2px solid lightgray;
  align-items: center;

  .navImage {
    height: 30px;
    width: 80px;
    background-color: white;
    object-fit: fill;
  }

  .navuserBox {
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
    cursor: pointer;

    .userIcon {
      height: 28px;
      width: 28px;
      color: grey;
      margin-top: 5px;
    }

    .navuserEmail {
      font-size: 16px;
    }
  }
`;
