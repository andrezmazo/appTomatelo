import React from "react";
import "./Logo.scss"


const Logo = (props) =>{
    return (
        <div className="logo-index">
            <img src={require("../../../assets/img/logo-tomatelo.png")} alt=""  />
        </div>
    )
}

export default Logo;