export interface Reservation {
    id: string;
    name: string;
    hotelName: string;
    arrivalDate: string;
    departureDate: string;
  }
  
export interface ListItem {
    item: Reservation
  }