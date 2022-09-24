import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

// в enum объявляем список роутов приложения, которые можем хранить в стейтах или redux
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

// создаем объект, в котором из enum укажем ссылки на пути. Используем Record (посмотреть TS)
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

// объявление самих роутов в используемом компоненте

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
