import styled from "styled-components";
import { devices } from "../../breakpoints/mediaQueries";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 25px 40px;
  background-color: lightpink;
  gap: 40px;
  margin-top: 50px;

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 35px 40px;
    gap: 40px;
  }
  @media ${devices.tabletsAndIpads} {
  }

  @media ${devices.smallTabs} {
    display: none;
  }
  @media ${devices.smallMobiles} {
    display: none;
  }

  .footerContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .footerImage {
    object-fit: fill;
    height: 50px;
    width: 100%;
    @media ${devices.bigLaptopsAndDesktops} {
      height: 30px;
      width: 100%;
    }
    @media ${devices.tabletsAndIpads} {
      height: 30px;
      width: 100%;
    }
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .footerBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media ${devices.bigLaptopsAndDesktops} {
      gap: 10px;
    }
    @media ${devices.tabletsAndIpads} {
      gap: 10px;
    }
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .footerHeading {
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    color: #000000;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 22px;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
    }
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .footerul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 3px;
    }
    @media ${devices.tabletsAndIpads} {
      gap: 3px;
    }
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .footerlist {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #000000;

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

  .footerCopyright {
    display: flex;
    justify-content: center;
  }

  .footerCopyrighttext {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #000000;

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
`;
