"use client"
import { ReactNode } from "react";
import { useTelegram } from "../providers/TelegramBotProvider"

type Props = {
    children: ReactNode
}

function Test({ children }: Props) {
    const { user, webApp } = useTelegram();

    return (
        <>
            {user ? (
                { children }
            ) : (
                <div>Make sure web app is opened from telegram client</div>
            )}
        </>
    )
}

export default Test