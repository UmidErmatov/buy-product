'use client'
import { ReactNode, useEffect } from 'react';

function TelegramBotProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        const tele = (window as any).Telegram?.WebApp;
        if (tele) {
            tele.ready();
            console.log('tele: ', tele);
        }
    }, [])

    return (
        <>{children}</>
    )
}

export default TelegramBotProvider