export interface User {
    id?: string | number;
    name: string;
    email: string;
    password: string;
    confirmPass: string;
    role?: "admin" | "member" | "guest";
}