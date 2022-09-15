import React from "react";

export const MainPageAsync = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    //так в реальных проектах не делать. Используем только для курса.
    setTimeout(()=>resolve(import('./MainPage')), 1500)
}));