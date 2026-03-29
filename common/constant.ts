export const CardItems = [
  {
    id: 1,
    icon: "person",
    title: "Continue As Rider",
    descriptions:
      " Find a ride and get to your destination quickly and safely.",
    imagePath: "/file.svg",
    buttonText: "Select Rider",
    route: "/auth/userlogin",
  },
  {
    id: 2,
    icon: "directions_car",
    title: "Continue as Captain",
    descriptions: "Drive with us and earn money on your own flexible schedule.",
    imagePath: "/file.svg",
    buttonText: "Select Captain",
    route: "/auth/captainlogin",
  },
];

export const MobileNavbarItems = [
  { id: 1, icon: "home", name: "Home", route: "/home" },
  { id: 2, icon: "history", name: "Activity", route: "/activity" },
  { id: 3, icon: "group", name: "Community", route: "/community" },
  { id: 4, icon: "account_balance_wallet", name: "Wallet", route: "/wallet" },
  { id: 5, icon: "person", name: "Profile", route: "/profile" },
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

export const RideVehical = [
  {
    id: 1,
    name: "UberX",
    capacity: 4,
    arrivalTime: "12:45",
    cost: "$12.89",
    color: "#ff80ed",
  },
  {
    id: 2,
    name: "Bike",
    capacity: 1,
    arrivalTime: "9:45",
    cost: "$7.89",
    color: "#065535",
  },
  {
    id: 3,
    name: "Comfort",
    capacity: 4,
    arrivalTime: "12:45",
    cost: "$14.89",
    color: "#133337",
  },
  {
    id: 4,
    name: "UberXL",
    capacity: 6,
    arrivalTime: "12:45",
    cost: "$18.89",
    color: "#ffc0cb",
  },
];

export enum QueryKey {
  ACTIVITY = "activity",
  COMMUNITY_POST = "community-post",
  COMMUNITY_STORIES = "stories",
}

export enum StaleTime {
  STALETIME = 10 * 60 * 1000,
}
