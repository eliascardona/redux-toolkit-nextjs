import { Link, useParams } from 'react-router-dom'
import { useGetPokemonObjQuery } from '@/redux/api/reduxAPI';
import './SinglePokemon.css'

function SinglePokemon() {
  const {name} = useParams();
  
  const { data: pokemonData} = useGetPokemonObjQuery(name)   

  return (
    <div className='main-container'>
        <Link to="/" className='btn'>Go Back</Link>
        {pokemonData &&<div>
          <div className='header'>
            <h2>Types</h2>
            <ul className='ul-types'>
              {pokemonData.types.map((type)=>{
                return(
                  <li>{type.type.name}</li>
                )
              })}
            </ul>
          </div>
          <div className='info flex'>
            <div>
              <p>Number:</p>
              <p>{pokemonData.order}</p>
            </div>
            <div>
              <p>Name:</p>
              <p>{pokemonData.name}</p>
            </div>
            <div>
              <p>Height:</p>
              <p>{pokemonData.height}</p>
            </div>
            <div>
              <p>Weight:</p>
              <p>{pokemonData.weight}</p>
            </div>

          </div>
          <div className='flex'>
            <div className='stats-container'>
              {pokemonData.stats.map(stat=>(
                          <div > 
                               <p>{stat.stat.name}</p>
                               <div className="prog-container">
                                 <p>{stat.base_stat}</p>
                                 <progress id="progress" max="100" value={stat.base_stat} /> 
                               </div>
                           </div>
              ))}
 
            </div>
            <div className='abilities-container'>
              <h4>Abilities</h4>
              <div className='ul-abilities'>
              {pokemonData.abilities.map(ability=>(
                          <p> {ability.ability.name}</p>
              ))}
              </div>
 
            </div>
          </div>
        </div>}

    </div>
  )
}

export default SinglePokemon