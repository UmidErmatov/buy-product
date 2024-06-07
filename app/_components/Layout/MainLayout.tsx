'use client'

import { useTelegram } from "@/app/providers/TelegramBotProvider";
import { useState } from "react";
import { Card, Cart } from "..";
import { getData } from "@/app/db/db";
import { FoodType } from "@/app/types/cardTypes";
const foods = getData();
type Props = {}


function MainLayout({ }: Props) {
    const { user, webApp } = useTelegram();
    const [cartItems, setCartItems] = useState<any[]>([]);

    const onAdd = (food: FoodType) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...food, quantity: 1 }]);
        }
    };

    const onRemove = (food: FoodType) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== food.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
                )
            );
        }
    };

    const onCheckout = () => {
        if (webApp) {
            webApp.MainButton.text = "Pay :)";
            webApp.MainButton.show();
        }
    };

    return (
        <>{user ?
            (<><h1 className="heading">Order Food</h1>
                <Cart cartItems={cartItems} onCheckout={onCheckout} />
                <div className="cards__container">
                    {foods.map((food) => {
                        return (
                            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
                        );
                    })}
                </div></>) : (<div>Make sure web app is opened from telegram client</div>)}
        </>
    )
}

export default MainLayout