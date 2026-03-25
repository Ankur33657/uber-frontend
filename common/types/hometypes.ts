export interface DataItems {
  datePicker: boolean;
  selectedDate: Date | undefined;
  currentAddress: { lat: number; lng: number };
  selectedAddress: { lat: number; lng: number };
  address: string;
  step: number;
}
