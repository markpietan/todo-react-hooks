import React from 'react'
import "./Photo.css"

const Photo = ({thumbnail, description, setBackground, regular}) => {
    return (
     <figure onClick= {function(){
       setBackground(regular)
     }}>
         <img src= {thumbnail} alt= {description}></img>
         <figcaption>{description}</figcaption>
     </figure>


    )
}




export default Photo