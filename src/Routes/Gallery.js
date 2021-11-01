import React from "react";
import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import on from "../vendor/img/bulbOn.png";
import off from "../vendor/img/bulbOff.png";
export default function Gallery(){
    const [bulb, setBulb] = useState({off})
    return(
        <div>
            <Navbar/>
            <div className="container">
            <img src={bulb} style={{height:"400px"}} alt="this bulb to on/off using button"/>
            <button className="btn-btn-success" onClick={()=>setBulb({on})}>On</button>
            <button className="btn-btn-danger" onClick={()=>setBulb({off})}>Off</button>
            </div>
            <Footer/>

        </div>
    )
}