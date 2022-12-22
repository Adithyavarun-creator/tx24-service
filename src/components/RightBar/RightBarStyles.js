import styled from "styled-components";

export const RightbarContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  padding: 15px 15px;
  gap: 50px;

  .rightbarBox-1 {
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    padding: 15px 15px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 2px solid lightgrey;
  }

  .righbarStage {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #ff1282;
  }

  .righbarCount {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #000000;
  }

  .rightbarCountdown {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
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
  }

  .rightbarscanIcon {
    height: 40px;
    width: 40px;
    color: white;
  }

  .rightbarBuyText {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #ffffff;
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
  }

  .rightBarStatusName {
    display: flex;
    justify-content: center;
  }

  .rightbarstatusText {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: #ff1282;
    text-transform: capitalize;
  }

  .rightbarStages {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .rightbarStage {
    display: flex;
    flex-direction: row;
    gap: 14px;

    .stageStep {
      font-style: normal;
      font-weight: 300;
      font-size: 8px;
      color: #ff1282;
    }

    span {
      font-style: normal;
      font-size: 8px;
      color: #000000;
      font-weight: 300;
    }
  }
`;
