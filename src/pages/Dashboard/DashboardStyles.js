import styled from "styled-components";
import { devices } from "../../breakpoints/mediaQueries";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  flex-wrap: wrap;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
  }

  .leftbarWrapper {
    flex: 2;

    @media ${devices.bigLaptopsAndDesktops} {
      flex: 2;
    }

    @media ${devices.tabletsAndIpads} {
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
  }

  .rightbarWrapper {
    flex: 2;

    @media ${devices.bigLaptopsAndDesktops} {
      flex: 2;
    }

    @media ${devices.tabletsAndIpads} {
      flex: 1;
    }
  }
`;
