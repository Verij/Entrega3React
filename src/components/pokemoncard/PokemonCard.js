import React from 'react'
import { CardStyled, TitleCard } from './PokemonCardStyles';


export const PokemonCard = pokemon => {
  const {name, order, weight} = pokemon;
  return (<>
<CardStyled>
    <TitleCard >{name}</TitleCard>
    <h3 >Numero en la pokedex: {order}</h3>
    <h3>Peso: {weight} kg</h3>
</CardStyled>
    </>
    
  )
}
