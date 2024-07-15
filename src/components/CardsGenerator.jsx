import Card from "./Card"

const CardsGenerator = ()=> {

    const colors = [
        "bg-red-700",
        "bg-purple-700",
        "bg-green-700",
        "bg-slate-700",
        "bg-red-700",
        "bg-purple-700",
        "bg-green-700",
        "bg-slate-700",
    ]

    return colors.map((color, index)=> {
        
     return <Card id={index} color={color} />
        
    })
 
}
export default CardsGenerator;
