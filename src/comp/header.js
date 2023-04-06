import React from "react";
import "./header.css" ; 
export default function Header(){
    return(
        <div className="header">
         <h1>JUMPSTART</h1>
         <div className="search">
             <form>
             
                 <input type={Text} className="inpbox" >
    
                 </input>
                 <button className="btn"><i class="fa-solid fa-magnifying-glass"></i> </button>
             </form>
             <div className="profile">
             <i class="fa-solid fa-user"></i>
             </div>
         </div>
        </div>
    )
}