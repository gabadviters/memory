import { useState } from "react";


const Card = ({color, id})=> {
    const [isActive, setIsActive] = useState(false)

    const selectedCard = []

    if (isActive) {
        
    }
    
    return(
        <button id={id} onClick={() => setIsActive(!isActive)} className= {`w-40 h-40  m-3 ${isActive ? color: "bg-slate-300"}`} >

        </button>
    )
}


export default Card;