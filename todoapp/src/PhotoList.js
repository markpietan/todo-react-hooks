import React from "react";
import "./PhotoList.css"
import Photo from "./Photo"

const PhotoList = ({results, setBackground}) => {
  return <section id= "results">
      {results.map(function(photo){
       return <Photo setBackground= {setBackground} key= {photo.id} thumbnail= {photo.urls.thumb} description= {photo.alt_description} regular= {photo.urls.regular}></Photo>
      })}
  </section>;
};

export default PhotoList;
