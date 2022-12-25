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
    gap: 20px;
  }
  @media ${devices.smallMobiles} {
    gap: 30px;
    padding: 10px 10px;
    display: flex;
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

  @media ${devices.smallTabs} {
    padding: 10px 25px;
    gap: 20px;
  }
  @media ${devices.smallMobiles} {
    padding: 10px 10px;
    gap: 10px;
  }

  .contentInfo {
    display: flex;
    justify-content: space-between;

    @media ${devices.bigLaptopsAndDesktops} {
      display: flex;
      justify-content: space-between;
    }
    @media ${devices.tabletsAndIpads} {
      display: flex;
      justify-content: space-between;
    }
    @media ${devices.smallTabs} {
      display: flex;
      justify-content: space-between;
    }
    @media ${devices.smallMobiles} {
      display: flex;
      justify-content: space-between;
    }

    h1 {
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 20px;
      text-transform: uppercase;
      color: #ff1282;

      @media ${devices.bigLaptopsAndDesktops} {
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 20px;
        text-transform: uppercase;
        color: #ff1282;
      }
      @media ${devices.tabletsAndIpads} {
        font-weight: 300;
        font-size: 18px;
      }
      @media ${devices.smallTabs} {
        font-weight: 300;
        font-size: 18px;
      }
      @media ${devices.smallMobiles} {
        font-weight: 300;
        font-size: 14px;
      }
    }
  }

  .contentTokenBox {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    /* gap: 30px; */
    @media ${devices.bigLaptopsAndDesktops} {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      position: relative;
    }
    @media ${devices.tabletsAndIpads} {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      position: relative;
    }
    @media ${devices.smallTabs} {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      position: relative;
    }
    @media ${devices.smallMobiles} {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      position: relative;
    }

    span {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      text-transform: uppercase;

      @media ${devices.bigLaptopsAndDesktops} {
        font-weight: 300;
        font-size: 16px;
      }
      @media ${devices.tabletsAndIpads} {
        font-weight: 300;
        font-size: 13.5px;
      }
      @media ${devices.smallTabs} {
        font-weight: 300;
        font-size: 13.5px;
      }
      @media ${devices.smallMobiles} {
        font-weight: 300;
        font-size: 12.5px;
      }
    }

    .contentEqual {
      position: absolute;
      right: 140px;

      @media ${devices.bigLaptopsAndDesktops} {
        position: absolute;
        right: 140px;
      }
      @media ${devices.tabletsAndIpads} {
        right: 135px;
      }
      @media ${devices.smallTabs} {
        right: 135px;
      }
      @media ${devices.smallMobiles} {
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
    @media ${devices.smallTabs} {
      padding: 15px 20px;
    }
    @media ${devices.smallMobiles} {
      padding: 10px 10px;
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
      @media ${devices.smallTabs} {
        font-weight: bold;
        font-size: 16px;
        color: black;
      }
      @media ${devices.smallMobiles} {
        font-weight: bold;
        font-size: 14px;
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
  @media ${devices.smallTabs} {
    padding: 10px 25px;
    gap: 15px;
  }
  @media ${devices.smallMobiles} {
    padding: 10px 15px;
    gap: 10px;
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
    @media ${devices.smallTabs} {
      gap: 3px;
    }
    @media ${devices.smallMobiles} {
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
    @media ${devices.smallTabs} {
      font-size: 14px;
    }
    @media ${devices.smallMobiles} {
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
      height: 15px;
      width: 15px;
    }
    @media ${devices.smallTabs} {
      height: 12px;
      width: 12px;
    }
    @media ${devices.smallMobiles} {
      height: 8px;
      width: 8px;
    }
  }

  .contentInfo2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      height: 10px;
      width: 10px;
    }
    @media ${devices.smallTabs} {
      height: 10px;
      width: 10px;
    }
    @media ${devices.smallMobiles} {
      height: 8px;
      width: 8px;
    }
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
    @media ${devices.smallTabs} {
      font-size: 14px;
    }
    @media ${devices.smallMobiles} {
      font-size: 13px;
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
    @media ${devices.smallTabs} {
      gap: 8px;
    }
    @media ${devices.smallMobiles} {
      gap: 6px;
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
      @media ${devices.smallTabs} {
        gap: 8px;
      }
      @media ${devices.smallMobiles} {
        gap: 6px;
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
      @media ${devices.smallTabs} {
        font-size: 16px;
      }
      @media ${devices.smallMobiles} {
        font-size: 14px;
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
      @media ${devices.smallTabs} {
        font-size: 16px;
      }
      @media ${devices.smallMobiles} {
        font-size: 14px;
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
    @media ${devices.smallTabs} {
      gap: 15px;
    }
    @media ${devices.smallMobiles} {
      gap: 13px;
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
      @media ${devices.smallTabs} {
        font-size: 20px;
      }
      @media ${devices.smallMobiles} {
        font-size: 16px;
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
        @media ${devices.smallTabs} {
          font-size: 16px;
        }
        @media ${devices.smallMobiles} {
          font-size: 14px;
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
        @media ${devices.smallTabs} {
          font-size: 12px;
        }
        @media ${devices.smallMobiles} {
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
    @media ${devices.smallTabs} {
      gap: 14px;
    }
    @media ${devices.smallMobiles} {
      gap: 12px;
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
      @media ${devices.smallTabs} {
        gap: 20px;
      }
      @media ${devices.smallMobiles} {
        gap: 14px;
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
      @media ${devices.smallTabs} {
        gap: 12px;
      }
      @media ${devices.smallMobiles} {
        gap: 10px;
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
      @media ${devices.smallTabs} {
        gap: 12px;
      }
      @media ${devices.smallMobiles} {
        gap: 10px;
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
  @media ${devices.smallTabs} {
    gap: 12px;
  }
  @media ${devices.smallMobiles} {
    gap: 10px;
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
    @media ${devices.smallTabs} {
      gap: 6px;
    }
    @media ${devices.smallMobiles} {
      gap: 8px;
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
    @media ${devices.smallTabs} {
      font-size: 12px;
    }
    @media ${devices.smallMobiles} {
      font-size: 10px;
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
    @media ${devices.smallTabs} {
      height: 10px;
      width: 10px;
    }
    @media ${devices.smallMobiles} {
      height: 8px;
      width: 8px;
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
    @media ${devices.smallTabs} {
      font-size: 15px;
    }
    @media ${devices.smallMobiles} {
      font-size: 12px;
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
    @media ${devices.smallTabs} {
      padding: 10px 8px;
    }
    @media ${devices.smallMobiles} {
      padding: 6px 6px;
    }

    .flexColumn {
      display: flex;
      flex-direction: column;
      gap: 15px;

      @media ${devices.bigLaptopsAndDesktops} {
      }
      @media ${devices.tabletsAndIpads} {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      @media ${devices.smallTabs} {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      @media ${devices.smallMobiles} {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
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
      @media ${devices.smallTabs} {
        font-size: 13px;
      }

      @media ${devices.smallMobiles} {
        font-size: 11px;
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
    @media ${devices.smallTabs} {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 15px;
      margin-bottom: 15px;
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
      @media ${devices.smallTabs} {
        padding: 8px 6px;
        font-size: 12.5px;
      }

      @media ${devices.smallMobiles} {
        padding: 6px 4px;
        font-size: 12.5px;
      }
    }
  }
`;
