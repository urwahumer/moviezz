import React from 'react';
import Navbar from './Navbar';

const SharedLayout = (props) => {
    console.log(props)
    return (
        <div>
           <Navbar/>
           {props.children}
           
        </div>
    );
};

export default SharedLayout;