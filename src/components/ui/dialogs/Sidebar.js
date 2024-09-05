import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux';
import { useGetPokemonObjQuery } from '@/redux/api/reduxAPI';

function Sidebar() {
  const {  pokemonPreSelected } = useSelector(state=> state.pokemonsState); 
  
  const { data: pokemonData } = useGetPokemonObjQuery(pokemonPreSelected.name)   


  return (
    <aside className='Sidebar'>
        <div className='container-img'>
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />
        </div>
        <div style={{width:"300px"}}>
        {pokemonData && pokemonData.sprites.front_default &&  
            <img src={pokemonData.sprites.front_default} alt={pokemonPreSelected.name} style={{width:"300px", height:"100%"}}/>
          }
        </div>
    </aside>
  )
}

export default Sidebar