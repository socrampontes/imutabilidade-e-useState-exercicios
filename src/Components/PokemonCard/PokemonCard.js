import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";

export const PokemonCard = ({ PokemonCard, setPokemon }) => {
  const { color, image, name, type, weight } = PokemonCard;

  const evoluirPokemon = () => {
    

    if (name === "Pichu") {
      const evoluir = {
        name: "Pikachu",
        type: "Electric",
        evolved: true,
        weight: 6,
        color: "Yellow",
        image:
          "https://archives.bulbagarden.net/media/upload/b/b4/0025Pikachu-Cosplay.png",
      };
      setPokemon(evoluir);
    } else if (name === "Bulbasauro") {
      const evoluir = {
        name: "Ivysaur",
        type: "Overgrow",
        evolved: true,
        weight: 13,
        color: "green",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/250px-0002Ivysaur.png",
      };
      setPokemon(evoluir)
    }
  }
    return (
      <Card color={color}>
        <img src={image} alt={`Pokemon`} />
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
      </Card>
    );
  };

