export interface AddressItem {
  address: string;
  lat: number;
  lng: number;
}
export interface HomePageItems {
  datePicker?: boolean;
  source: AddressItem;
  destination: AddressItem;
  journeyTime: Date;
  currentTime: Date;
  ride?: {
    name: string;
    cost: string;
  };
  step?: number;
}
