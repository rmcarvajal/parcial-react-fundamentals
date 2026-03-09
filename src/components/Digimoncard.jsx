import "./Digimon.css"

export const Digimoncard = ({index, name, image}) =>{
    return(
<>
<p>{index}</p>
<h2>{name}</h2>
<img src={image} width="200" height="200"/>
</>
    )
}