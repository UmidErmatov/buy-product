import { StaticImageData } from "next/image";

export interface FoodType {
    id: number;
    title: string;
    imageUrl: string | StaticImageData;
    price: number;
}