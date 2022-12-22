import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 25px 40px;
  background-color: lightpink;
  gap: 40px;
  margin-top: 50px;

  .footerContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .footerImage {
    object-fit: fill;
    height: 50px;
    width: 100%;
  }

  .footerBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footerHeading {
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    color: #000000;
  }

  .footerul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .footerlist {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #000000;
  }

  .footerCopyright {
    display: flex;
    justify-content: center;
  }

  .footerCopyrighttext {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #000000;
  }
`;
