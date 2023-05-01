import React from "react";
import './header.scss';
const Header = (props)=>{
    return(
        <>
            <div><h1 className="title"> {props.title}</h1></div>
        </>
    )

}

export default Header