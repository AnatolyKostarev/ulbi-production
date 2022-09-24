import React from 'react';

export const AboutPageAsync = React.lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      //так в реальных проектах не делать. Используем только для курса.
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    })
);
