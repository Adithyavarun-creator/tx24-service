import styled from "styled-components";

export const LeftbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;

  .leftbarTitle {
    font-weight: 300;
    font-size: 14px;
    color: #6d6d6d;
  }

  .leftBarCols {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
    padding: 10px 10px;
  }

  .leftbarColBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    padding-inline: 10px 20px;
  }

  .leftbarIcon {
    height: 25px;
    width: 25px;
    color: lightgray !important;
  }

  .leftbarColname {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #6d6d6d;
  }

  .leftbarAccount {
    margin-top: 20px;
  }

  .mb-50 {
    margin-top: 50px;
  }

  .leftbarMessages {
    padding: 2px 7px;
    background: #ff1282;
    border-radius: 8px;
    font-size: 16px;
    text-align: center;
    color: white;
  }
`;
