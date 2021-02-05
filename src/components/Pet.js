import React from "react";

function Pet({ pet, onAdoptPet }) {
  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">

        <button className={pet.isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
        <button className={!pet.isAdopted ? "ui primary button" : "ui disabled button"} onClick={() => onAdoptPet(pet.id)}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
