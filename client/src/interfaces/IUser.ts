export interface User {
  _id?: string | number;
  username: string;
  email: string;
  avatar: string;
  password: string;
  confirmPass: string;
  role?: "admin" | "member";
}
