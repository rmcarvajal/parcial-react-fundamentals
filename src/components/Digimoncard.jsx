export const Digimoncard = ({index, name, image,deleteDigi}) =>{
    return(
<>
<p>{index}</p>
<h2>{name}</h2>
<img src={image} width="200" height="200"/>
<button onClick={()=>deleteDigi(index)}>Delete</button>
</>
    )
}