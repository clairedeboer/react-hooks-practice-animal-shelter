import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petDivs = pets.map((pet)=>{
    return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>;
  })
  return petDivs; 
}

export default PetBrowser;
