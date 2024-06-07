'use client'

import { FoodType } from '@/app/types/cardTypes';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '..';
import './Card.css'

type Props = { food: FoodType, onAdd: (food: FoodType) => void, onRemove: (food: FoodType) => void }

function Card({ food, onAdd, onRemove }: Props) {
    const [count, setCount] = useState(0);
    const { title, imageUrl, price, id } = food;

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
    };
    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
    };

    return (
        <div className="card">
            <span
                className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
            >
                {count}
            </span>
            <div className="image__container">
                <Image src={imageUrl} alt={title} fill quality={100} />
            </div>
            <h4 className="card__title">
                {title} . <span className="card__price">$ {price}</span>
            </h4>

            <div className="btn-container">
                <Button title={"+"} type={"add"} onClick={handleIncrement} />
                {count !== 0 ? (
                    <Button title={"-"} type={"remove"} onClick={handleDecrement} />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Card