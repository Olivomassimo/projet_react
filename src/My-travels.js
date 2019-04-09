import React from "react";


const Mytravels =({destination, country, photo, distance })=>(
    <figure>
        <img src={photo} alt={destination} />
        <figcaption>
            <blockquote>{destination}</blockquote>
            <cite>{country}</cite>
            <cite>{distance}</cite>
            <cite>{destination}</cite>
        </figcaption>
  </figure>
);

export default Mytravels;