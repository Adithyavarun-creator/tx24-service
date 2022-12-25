import styled from "styled-components";
import { devices } from "../../breakpoints/mediaQueries";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  flex-wrap: wrap;

  @media ${devices.bigLaptopsAndDesktops} {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  @media ${devices.tabletsAndIpads} {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  @media ${devices.smallTabs} {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  .leftbarWrapper {
    flex: 2;

    @media ${devices.bigLaptopsAndDesktops} {
      flex: 2;
    }

    @media ${devices.tabletsAndIpads} {
      flex: 1;
    }
    @media ${devices.smallTabs} {
      flex: 1;
    }
  }

  .contentWrapper {
    flex: 5;

    @media ${devices.bigLaptopsAndDesktops} {
      flex: 3;
    }

    @media ${devices.tabletsAndIpads} {
      flex: 1;
    }
    @media ${devices.smallTabs} {
      flex: 1;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .rightbarWrapper {
    flex: 2;

    @media ${devices.bigLaptopsAndDesktops} {
      flex: 2;
    }

    @media ${devices.tabletsAndIpads} {
      flex: 1;
    }
    @media ${devices.smallTabs} {
      flex: 1;
    }
  }
`;
