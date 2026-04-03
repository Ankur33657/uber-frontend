export interface LoginCardItems {
  id: number;
  icon: string;
  title: string;
  descriptions: string;
  imagePath: string;
  buttonText: string;
  route: string;
}

export interface LoginPropsItem {
  email: string;
  password: string;
  isVisible: boolean;
  loading: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginError {
  state: boolean;
  message: string;
}
export interface User {
  createdAt: string;
  email: string;
  isPremium: boolean;
  name: string;
  rating: number;
  role: string;
  savedPlaces: any[];
  _id: string;
}
