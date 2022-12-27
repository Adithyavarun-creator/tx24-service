import styled from "styled-components";
import { devices } from "../../breakpoints/mediaQueries";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 60px;
  justify-content: space-around;

  @media ${devices.bigLaptopsAndDesktops} {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    flex-wrap: nowrap;
    gap: 50px;
    /* justify-content: space-between; */
  }

  @media ${devices.tabletsAndIpads} {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    padding: 10px 5px;
    gap: 10px;
  }
  @media ${devices.smallTabs} {
    display: flex;
    flex-direction: row;
    padding: 10px 10px;
    flex-wrap: nowrap;
    justify-content: center;
  }
  @media ${devices.smallMobiles} {
    display: flex;
    justify-content: center;
    padding: 10px 10px;
  }

  .leftbarWrapper {
    /* flex: 1; */

    @media ${devices.bigLaptopsAndDesktops} {
      flex: 1;
    }

    @media ${devices.tabletsAndIpads} {
      flex: 1;
    }
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .contentWrapper {
    /* flex: 5; */

    @media ${devices.bigLaptopsAndDesktops} {
      flex: 3;
    }

    @media ${devices.tabletsAndIpads} {
      flex: 1;
    }
    @media ${devices.smallTabs} {
      display: flex;
    }
    @media ${devices.smallMobiles} {
      display: flex;
    }
  }

  .rightbarWrapper {
    /* flex: 2; */

    @media ${devices.bigLaptopsAndDesktops} {
      flex: 2;
    }

    @media ${devices.tabletsAndIpads} {
      display: inline-block;
    }
    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }
`;
