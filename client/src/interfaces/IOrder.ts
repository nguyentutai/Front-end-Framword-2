
import { IUser } from "./IUser";

export interface IOrder{
    _id?:string,
    userId:IUser,
    totalPrice:number,
    name_shopping:string,
    address_shopping:string,
    phone_shopping:string,
    subtotalPrice:number,
    productItem:[productId:any,quantity:number]
    status: "pending" | string,
    isHidden:false
    createdAt:any
}