import React from "react";
import logoImg from '../../assets/logo.png'

export default function Logo(){
    const styleImg = {
        width:"67px",
        height:"34px"
    }

    return <img src={logoImg} style={styleImg}/>
}