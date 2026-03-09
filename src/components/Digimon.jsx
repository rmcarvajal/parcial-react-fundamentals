import { useEffect, useState } from "react";
import { Digimoncard } from "./DigimonCard";

export const Digimon = () => {
    const [newDigi,setNewDigi] = useState("")
    const [newImage,setNewImage] = useState("")
    const [digiList,setDigiList] = useState([])

 useEffect(() => {
    fetch ("https://digi-api.com/api/v1/digimon?pageSize=10")
    .then((res) => res.json())
    .then ((data) => setDigiList(data.content))
 })

    const addDigi = () => {
        if(newDigi === ''){
            alert("please fill out respective information")
        } else if(newImage === ''){
            alert("please fill out respective information")
        } else{
        setDigiList([...digiList,{name: newDigi,image:newImage}])

        }
    }


    return(
        <div>
        <h1>digimon</h1>

        <input type="text" placeholder="Name" onChange={(event)=> setNewDigi(event.target.value)} />
        <input type="text" placeholder="Image link" onChange={(event)=> setNewImage(event.target.value)} />
        <button onClick={addDigi}>Add Digimon</button>

        {digiList.map((digimon,index) => {
            return (
            <div key={index}>
                <Digimoncard name={digimon.name} image={digimon.image} index={index}/>
            </div>
        )
})}
        </div>
    )
}