import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';

//we will not write like this but jsx internally do this 
// let heading = React.createElement("h1",{},"Namsate React");
let root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(heading);

// jsx
const Fn1 = () => <h2>ADB</h2>
const Fn2 = ()=>{
    return <div>hello i am <Fn1/> a functional component </div>
}
let jsxheading = (<h1 
className='jsxRoot' 
tabIndex={5}>hello JSX
</h1>)
root.render(jsxheading)
root.render(< Fn2 />)
