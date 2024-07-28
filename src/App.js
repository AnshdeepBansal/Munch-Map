import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { jsx } from 'react/jsx-runtime';
import Header from './components/Header'
import Body from './components/Body';
import CDN_URL from '../utils/constants';

//we will not write like this but jsx internally make a react element
let root = ReactDOM.createRoot(document.querySelector(".root"));

const AppLayout = ()=>{
    return (
        <>
            <Header/>
            <Body/>
        </>
    )
}
root.render(<AppLayout/>)