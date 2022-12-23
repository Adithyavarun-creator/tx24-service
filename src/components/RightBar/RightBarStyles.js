import styled from "styled-components";
import { devices } from "../../breakpoints/mediaQueries";

export const RightbarContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  padding: 15px 15px;
  gap: 50px;

  @media ${devices.bigLaptopsAndDesktops} {
  }
  @media ${devices.tabletsAndIpads} {
  }

  @media ${devices.smallTabs} {
    display: none;
  }
  @media ${devices.smallMobiles} {
    display: none;
  }

  .rightbarBox-1 {
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    padding: 15px 15px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 2px solid lightgrey;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      width: 60%;
      margin: 0 auto;
    }
  }

  .righbarStage {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #ff1282;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }
  }

  .righbarCount {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #000000;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }
  }

  .rightbarCountdown {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }
  }

  .rightbarBuybutton {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5px;
    background-color: #ff1282;
    padding: 10px 12px;
    justify-content: center;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      padding: 10px 10px;
      width: 40%;
      margin: 0 auto;
    }
  }

  .rightbarscanIcon {
    height: 40px;
    width: 40px;
    color: white;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }
  }

  .rightbarBuyText {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #ffffff;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }
  }

  .rightbarStatus {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid lightgray;
    border-radius: 15px;
    padding: 8px 6px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    :hover {
      -webkit-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
    }

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      width: 70%;
      margin: 0 auto;
    }
  }

  .rightBarStatusName {
    display: flex;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }
  }

  .rightbarstatusText {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: #ff1282;
    text-transform: capitalize;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }
  }

  .rightbarStages {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      gap: 13px;
      margin: 0 auto;
    }
  }

  .rightbarStage {
    display: flex;
    flex-direction: row;
    gap: 14px;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      gap: 30px;
      justify-content: center;
    }

    .stageStep {
      font-style: normal;
      font-weight: 300;
      font-size: 8px;
      color: #ff1282;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
      }
    }

    span {
      font-style: normal;
      font-size: 8px;
      color: #000000;
      font-weight: 300;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        font-size: 12px;
      }
    }
  }
`;
