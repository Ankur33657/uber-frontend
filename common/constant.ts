export const CardItems = [
  {
    id: 1,
    icon: "person",
    title: "Continue As Rider",
    descriptions:
      " Find a ride and get to your destination quickly and safely.",
    imagePath: "/rider.jpeg",
    buttonText: "Select Rider",
    route: "/auth/userlogin",
  },
  {
    id: 2,
    icon: "directions_car",
    title: "Continue as Captain",
    descriptions: "Drive with us and earn money on your own flexible schedule.",
    imagePath: "/captain.jpeg",
    buttonText: "Select Captain",
    route: "/auth/captainlogin",
  },
];

export const MobileNavbarItems = (isCaptain: boolean) => [
  {
    id: 1,
    icon: "home",
    name: "Home",
    route: isCaptain ? "/captain/home" : "/home",
  },
  {
    id: 2,
    icon: isCaptain ? "payments" : "history",
    name: isCaptain ? "Earning" : "Activity",
    route: isCaptain ? "/captain/earning" : "/activity",
  },
  { id: 3, icon: "group", name: "Community", route: "/community" },
  {
    id: 4,
    icon: "account_balance_wallet",
    name: "Wallet",
    route: "/wallet",
    hide: true,
  },
  {
    id: 5,
    icon: "person",
    name: isCaptain ? "Account" : "Profile",
    route: isCaptain ? "/captain/account" : "/profile",
  },
];

export const dummyAddress = [
  {
    id: 1,
    selected: { address: "Sector 50, Gurugram", lat: 28.423, lng: 77.054 },
  },
  {
    id: 2,
    selected: { address: "DLF Phase 3, Gurugram", lat: 28.49, lng: 77.098 },
  },
  {
    id: 3,
    selected: { address: "Sector 14, Gurugram", lat: 28.471, lng: 77.025 },
  },
  {
    id: 4,
    selected: { address: "Sushant Lok 2, Gurugram", lat: 28.411, lng: 77.081 },
  },
  {
    id: 5,
    selected: { address: "Sector 82, Gurugram", lat: 28.385, lng: 77.965 },
  },
];

export enum QueryKey {
  ACTIVITY = "activity",
  COMMUNITY_POST = "community-post",
  COMMUNITY_STORIES = "stories",
  ALL_NEWS = "news",
}

export enum StaleTime {
  STALETIME = 10 * 60 * 1000,
  NEWS_EXPIRE = 30 * 24 * 60 * 60 * 1000,
}

export enum FileSize {
  VIDEO = 20 * 1024 * 1024,
  IMAGE = 4 * 1024 * 1024,
}

export enum VehicleImageMap {
  BIKE = "/bike.webp",
  AUTO = "/auto.jpeg",
  CARXL = "/carXL.jpeg",
  CARXXL = "/carXXL.jpeg",
}

export const RegixMatcher: {
  ADHAR: RegExp;
  PAN: RegExp;
} = {
  ADHAR: /^\d{12}$/,
  PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
};
