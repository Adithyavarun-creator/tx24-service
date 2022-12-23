import styled from "styled-components";
import { devices } from "../../breakpoints/mediaQueries";

export const MidContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* margin-top: 30px; */

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 20px;
  }
  @media ${devices.tabletsAndIpads} {
    gap: 20px;
  }

  @media ${devices.smallTabs} {
    display: none;
  }
  @media ${devices.smallMobiles} {
    display: none;
  }
`;

export const Box1Container = styled.div`
  display: flex;
  flex-direction: column;

  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 2px solid lightgray;
  padding: 20px 35px;
  gap: 20px;
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
    padding: 10px 25px;
    gap: 10px;
  }

  .contentInfo {
    display: flex;
    justify-content: space-between;

    h1 {
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 20px;
      text-transform: uppercase;
      color: #ff1282;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        font-weight: 300;
        font-size: 18px;
      }
    }
  }

  .contentTokenBox {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    /* gap: 30px; */

    span {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      text-transform: uppercase;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        font-weight: 300;
        font-size: 13.5px;
      }
    }

    .contentEqual {
      position: absolute;
      right: 140px;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        right: 135px;
      }
    }
  }
  .contentBar {
    height: 40px;
    width: 67%;
    background-color: #ffb6c1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 20px;
    padding: 5px 20px;
    align-items: center;
    border: 2px solid white;
    margin-bottom: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      padding: 15px 20px;
    }

    span {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      color: black;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        font-weight: bold;
        font-size: 20px;
        color: black;
      }
    }
  }
`;

export const Box2Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 35px;
  gap: 20px;
  border-radius: 20px;
  border: 2px solid lightgray;
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
    padding: 10px 25px;
    gap: 15px;
  }

  .contentHide {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    align-items: center;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      gap: 3px;
    }
  }

  .contenthideText {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #000000;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
  }

  .contentHideIcon {
    height: 15px;
    width: 15px;
    color: gray;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      height: 10px;
      width: 10px;
    }
  }

  .contentInfo2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .contentInfoName {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #ff1282;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
  }

  .contentTokenbalance {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      gap: 8px;
    }

    .contentTokenBox {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        gap: 8px;
      }
    }

    .contentValue {
      font-style: normal;
      font-weight: 300;
      font-size: 26px;
      color: #000000;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        font-size: 20px;
      }
    }

    .contentUnit {
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 20px;
      color: #949494;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        font-size: 16px;
      }
    }
  }

  .contentDistributionBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .distributionAmounts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      gap: 17px;
    }

    .distributionAmount {
      display: flex;
      flex-direction: row;
      gap: 40px;
      align-items: center;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        font-size: 25px;
      }

      .distValue {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        color: #000000;

        @media ${devices.bigLaptopsAndDesktops} {
        }
        @media ${devices.tabletsAndIpads} {
          font-size: 16px;
        }
      }

      .distUnits {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        color: #949494;

        @media ${devices.bigLaptopsAndDesktops} {
        }
        @media ${devices.tabletsAndIpads} {
          font-size: 12px;
        }
      }
    }
  }

  .distributionPercentages {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      gap: 16px;
    }

    .distributionPercentage {
      display: flex;
      flex-direction: row;
      gap: 50px;
      align-items: center;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        gap: 25px;
      }
    }

    .percentUnits {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      color: #000000;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        gap: 14px;
      }
    }

    .percentValue {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      color: #000000;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        gap: 14px;
      }
    }
  }
`;

export const Box3Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 35px;
  gap: 20px;
  border-radius: 20px;
  border: 2px solid lightgray;
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
    gap: 14px;
  }

  .contentHide {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    align-items: center;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      gap: 3px;
    }
  }

  .contenthideText {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #000000;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
  }

  .contentHideIcon {
    height: 15px;
    width: 15px;
    color: gray;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      height: 10px;
      width: 10px;
    }
  }

  .contentTransactionsName {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #ff1282;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 15px;
    }
  }

  .transactionRowNames {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 10px;
    border-bottom: 2px solid lightgray;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      padding: 10px 8px;
    }

    .flexColumn {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    span {
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      color: #000000;

      @media ${devices.bigLaptopsAndDesktops} {
        font-size: 13px;
      }
      @media ${devices.tabletsAndIpads} {
        font-size: 13px;
      }
    }
  }

  .allTransactionBox {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-bottom: 40px;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .transactionButton {
      padding: 10px 8px;
      background-color: #ff1282;
      color: white;
      text-align: center;
      outline: none;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      font-size: 15px;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        padding: 8px 6px;
        font-size: 12.5px;
      }
    }
  }
`;
