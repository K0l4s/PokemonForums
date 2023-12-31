import React from 'react'
import './Pokedex.css'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
type Props = {}

const Pokedex = (props: Props) => {
    return (
        <div className='pokedex'>
            <div className="search">
                <input type="text" placeholder="Search Pokemon" />
                <button>Search</button>
            </div>
            <h1 className='title'>Pokemon List</h1>
            <div className="genList">
                <button>Tất cả</button>
                <button>Gen 1</button>
                <button>Gen 2</button>
                <button>Gen 3</button>
                <button>Gen 4</button>
                <button>Gen 5</button>
                <button>Gen 6</button>
                <button>Gen 7</button>
                <button>Gen 8</button>
                <button>Gen 9</button>
            </div>
            <div className="cardList">
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </div>
            <div className="tabList">
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
        </div>
    )
}

export default Pokedex