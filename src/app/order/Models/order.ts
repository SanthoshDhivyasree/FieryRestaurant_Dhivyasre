import { Item } from "./item";

export interface Order {
    id: string;
    orderNo: string;
    contactName: string;
    orderDate: string;
    imageUrl:string;
    itemsOrdered: Item[];
    orderTotal: number;
    taxTotal: number;
    grandTotal: number;
}
