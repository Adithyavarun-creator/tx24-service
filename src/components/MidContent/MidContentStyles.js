import styled from "styled-components";

export const MidContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;

  .contentBox1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    border: 2px solid lightgray;
    padding: 20px 35px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    :hover {
      -webkit-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
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
      }
    }

    .contentTokenBox {
      display: flex;
      justify-content: space-between;
      position: relative;

      span {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 20px;
        text-transform: uppercase;
      }

      .contentEqual {
        position: absolute;
        right: 175px;
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

      span {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        color: black;
      }
    }
  }

  .contentBox2 {
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

    .contentHide {
      display: flex;
      justify-content: flex-end;
      gap: 5px;
      align-items: center;
      cursor: pointer;
    }

    .contenthideText {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      color: #000000;
    }

    .contentHideIcon {
      height: 15px;
      width: 15px;
      color: gray;
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
    }

    .contentTokenbalance {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 10px;
      align-items: center;

      .contentTokenBox {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
      }

      .contentValue {
        font-style: normal;
        font-weight: 300;
        font-size: 26px;
        color: #000000;
      }

      .contentUnit {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 20px;
        color: #949494;
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

      .distributionAmount {
        display: flex;
        flex-direction: row;
        gap: 40px;
        align-items: center;

        .distValue {
          font-style: normal;
          font-weight: 300;
          font-size: 20px;
          color: #000000;
        }

        .distUnits {
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          color: #949494;
        }
      }
    }

    .distributionPercentages {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .distributionPercentage {
        display: flex;
        flex-direction: row;
        gap: 50px;
        align-items: center;
      }

      .percentUnits {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        color: #000000;
      }

      .percentValue {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        color: #000000;
      }
    }
  }

  .contentBox3 {
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

    .contentHide {
      display: flex;
      justify-content: flex-end;
      gap: 5px;
      align-items: center;
      cursor: pointer;
    }

    .contenthideText {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      color: #000000;
    }

    .contentHideIcon {
      height: 15px;
      width: 15px;
      color: gray;
    }

    .contentTransactionsName {
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      color: #ff1282;
    }

    .transactionRowNames {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 10px;
      border-bottom: 2px solid black;

      .flexColumn {
        display: flex;
        flex-direction: column;
      }

      span {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        color: #949494;
      }
    }

    .allTransactionBox {
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;
      margin-bottom: 40px;


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
      }
    }
  }
`;
