import React from 'react'
import './PokemonCard.css'
const PokemonCard = () => {
  return (
    <div className='pokemonCard'>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="" />
        <div className="pokemonInfo">
            <h1>Bulbasaur</h1>
            <p className='types'>Cỏ</p>
            <p className='types'>Độc</p>
        </div>
        <button>See more</button>
        
    </div>
  )
}

export default PokemonCard