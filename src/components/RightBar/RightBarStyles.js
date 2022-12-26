import styled from "styled-components";
import { devices } from "../../breakpoints/mediaQueries";

export const RightbarContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  padding: 15px 15px;
  gap: 50px;

  @media ${devices.bigLaptopsAndDesktops} {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    padding: 15px 15px;
    gap: 50px;
  }
  @media ${devices.tabletsAndIpads} {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    padding: 5px 5px;
    gap: 35px;
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
      border: 1px solid grey;
      display: flex;
      flex-direction: column;
      padding: 15px 15px;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      border: 2px solid lightgrey;
    }
    @media ${devices.tabletsAndIpads} {
      /* width: 60%; */
      /* margin: 0 auto; */
      width: 60%;
      padding: 7px 7px;
      justify-content: center;
      margin: 0 auto;
    }
  }

  .righbarStage {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #ff1282;

    @media ${devices.bigLaptopsAndDesktops} {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      color: #ff1282;
    }
    @media ${devices.tabletsAndIpads} {
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      color: #ff1282;
    }
  }

  .righbarCount {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #000000;

    @media ${devices.bigLaptopsAndDesktops} {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      color: #000000;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 10px;
    }
  }

  .rightbarCountdown {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
    }
    @media ${devices.tabletsAndIpads} {
      gap: 10px;
      /* padding: 5px 5px; */
      justify-content: center;
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
      gap: 15px;
    }
    @media ${devices.tabletsAndIpads} {
      padding: 10px 10px;
      width: 40%;
      gap: 5;
      margin: 0 auto;
    }
  }

  .rightbarscanIcon {
    height: 40px;
    width: 40px;
    color: white;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 40px;
      width: 40px;
    }
    @media ${devices.tabletsAndIpads} {
      height: 20px;
      width: 20px;
    }
  }

  .rightbarBuyText {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #ffffff;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 10px;
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
      width: 100%;
      margin: 0 auto;
      gap: 10px;
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
      font-size: 8px;
    }
  }

  .rightbarStages {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
      display: flex;
      flex-direction: column;
    }
    @media ${devices.tabletsAndIpads} {
      gap: 13px;
      /* margin: 0 auto; */
    }
  }

  .rightbarStage {
    display: flex;
    flex-direction: row;
    gap: 14px;

    @media ${devices.bigLaptopsAndDesktops} {
      display: flex;
      flex-direction: row;
      gap: 14px;
      justify-content: center;
    }
    @media ${devices.tabletsAndIpads} {
      gap: 8px;
      justify-content: center;
    }

    .stageStep {
      font-style: normal;
      font-size: 12px;
      color: #ff1282;
      font-weight: bold;

      @media ${devices.bigLaptopsAndDesktops} {
        font-size: 12px;
      }
      @media ${devices.tabletsAndIpads} {
        font-size: 6px;
        font-weight: bold;
      }
    }

    span {
      font-style: normal;
      font-size: 12px;
      color: #000000;
      font-weight: 300;

      @media ${devices.bigLaptopsAndDesktops} {
        font-size: 12px;

      }
      @media ${devices.tabletsAndIpads} {
        font-size: 8px;
      }
    }
  }
`;
