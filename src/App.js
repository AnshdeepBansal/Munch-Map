import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body';
import Footer  from './components/Footer';
import Cart from './components/Cart';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import ErrorEle from './components/ErrorEle';
import About from './components/About';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import AppStore from '../utils/AppStore';

//we will not write like this but jsx internally make a react element
let root = ReactDOM.createRoot(document.querySelector(".root"));

const AppLayout = ()=>{
    return (
        <>
        <Provider store={AppStore}> 
            <Header/>
            <Outlet/>
            <Footer/>
        </Provider>
        </>
    )
}

const router_app = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorEle/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])
root.render(<RouterProvider router={router_app}/>)