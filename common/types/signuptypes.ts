export interface signupItems {
  id: number;
  header: string;
    palceholder: string;
    error: string
    value: string,
    onChange:(item:string)=>void
}
export interface payloadItems{
    name: string;
    email: string;
    phone: string;
    password: string
    passwordVisible:boolean
}