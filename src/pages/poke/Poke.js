import React from 'react'
import axios from 'axios';
import { Loader } from '../../components/loader/Loader';

import { PokemonCard } from '../../components/pokemoncard/PokemonCard';
import { StyledContainer } from '../../components/todoList/TodoListStyles';
import { useQuery } from 'react-query';
import { CardsContainer } from './PokeStyles';


const Poke = () => {
const { isLoading, data, isError} = useQuery('pokemones', () => {        return axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => res.data.results);
} );


  return (
    <>
    <StyledContainer>
    {isLoading && <Loader />}
    {isError && <h2>error</h2>}
<CardsContainer>
    {data && data.map((pokemon) => (
    <PokemonCard key={pokemon.id} {...pokemon}/>)) }
   </CardsContainer>
    </StyledContainer>
    </>
  )
}

export default Poke;