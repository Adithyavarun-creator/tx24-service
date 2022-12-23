import styled from "styled-components";
import { devices } from "../../breakpoints/mediaQueries";

export const LeftbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;

  @media ${devices.bigLaptopsAndDesktops} {
  }
  @media ${devices.tabletsAndIpads} {
    padding: 8px 12px;
  }

  @media ${devices.smallTabs} {
    display: none;
  }
  @media ${devices.smallMobiles} {
    display: none;
  }

  .leftbarTitle {
    font-weight: 300;
    font-size: 14px;
    color: #6d6d6d;
    cursor: pointer;

    :hover {
      font-weight: bolder;
    }

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
  }

  .leftBarCols {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
    padding: 10px 10px;
    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      gap: 20px;
      margin-top: 20px;
      padding: 10px 10px;
    }
  }

  .leftbarColBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    padding: 10px 10px;

    :hover {
      background-color: #ff1282;
      border-radius: 10px;
    }

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      gap: 10px;
      padding: 8px 10px;
    }
  }

  .leftbarIcon {
    height: 25px;
    width: 25px;
    color: lightgray !important;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      height: 20px;
      width: 20px;
    }
  }

  .leftbarColname {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: #6d6d6d;

    :hover {
      color: white;
      font-weight: bolder;
    }

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
  }

  .leftbarAccount {
    margin-top: 20px;
    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      margin-top: 10px;
    }
  }

  .mb-50 {
    margin-top: 50px;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      margin-top: 30px;
    }
  }

  .leftbarMessages {
    padding: 2px 7px;
    background: #ff1282;
    border-radius: 8px;
    font-size: 16px;
    text-align: center;
    color: white;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      padding: 2px 7px;
      font-size: 14px;
    }
  }
`;
