import React from "react";

import Mytravels from "./My-travels"


const travels = [
    {
      destination:"Italie",
      country: "Rome",
      distance: "1000KM",
      photo: "https://zupimages.net/up/19/15/w30q.jpg"
    },

    {
      destination: "Belgique",
      country: "Bruxelles",
      distance: "1000KM",
      photo: "https://zupimages.net/up/19/15/fozb.jpg"
    },

    {
      destination: "France",
      country: "Paris",
      distance: "1000KM",
      photo: "https://zupimages.net/up/19/15/er51.jpg"
    },

    {
      destination:"Tunis",
      country: "Tunesi",
      distance: "1000KM",
      photo: "https://zupimages.net/up/19/15/2r7x.jpg"
    },

    {
        destination:"Espagne",
        country: "Madrid",
        distance: "1000KM",
        photo: "https://zupimages.net/up/19/15/65hm.jpg"
      }
  ];

  const Travels = () => (
    <div>
      {travels.map(travels => (
        <Mytravels photo={travels.photo} destination={travels.destination} country={travels.country} distance={travels.distance} />
      ))}
    </div>
  );

  
export default Travels;