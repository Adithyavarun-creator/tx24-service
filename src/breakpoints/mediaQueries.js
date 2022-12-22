export const size = {
  //big desktops
  LaptopsDesktopMin: "1025px",
  LaptopsDesktopMax: "1280px",
  //tablets and ipads
  TabletIpadsMin: "768px",
  TabletIpadsMax: "1024px",
  //small tabs
  SmallTabsMin: "481px",
  SmallTabsMax: "767px",
  //mobile devices
  SmallDeviceMin: "280px",
  SmallDeviceMax: "480px",
};

export const devices = {
  bigLaptopsAndDesktops: `(min-width: ${size.LaptopsDesktopMin}) and (max-width: ${size.LaptopsDesktopMax})`,
  tabletsAndIpads: `(min-width: ${size.TabletIpadsMin}) and (max-width: ${size.TabletIpadsMax})`,
  smallTabs: `(min-width: ${size.SmallTabsMin}) and (max-width: ${size.SmallTabsMax})`,
  smallMobiles: `(min-width: ${size.SmallDeviceMin}) and (max-width: ${size.SmallDeviceMax})`,
};

/*
  @media ${devices.bigLaptopsAndDesktops} {
  }
  @media ${devices.tabletsAndIpads} {
   
  }
  @media ${devices.smallTabs} {
    
  }
  @media ${devices.smallMobiles} {
    
  }
  */
