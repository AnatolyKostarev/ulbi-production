import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";
import './styles/index.scss';


const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={'/'}>На Главную</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;
