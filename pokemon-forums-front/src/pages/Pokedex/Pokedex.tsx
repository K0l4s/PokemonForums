import React, { useEffect, useState } from 'react'
import './Pokedex.css'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
type Props = {}

const Pokedex = (props: Props) => {
    type Pokemon = {
        name: string;
        url: string;
    };
    // Get pokemon list from API 
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [limit, setLimit] = useState(50);
    const [offset, setOffset] = useState(0);
    const finalLimit = 1025;
    const [loading, setLoading] = useState(false);
    const getPokemonList = async () => {
        try {
            if(offset >= finalLimit) return;
            setLoading(true);
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset);
            const data = await response.json();
            setPokemonList([...pokemonList, ...data.results]);
            setOffset(offset + limit);
            setLoading(false);
            // console.log(pokemonList);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPokemonList();
    }, [])
    const poke = pokemonList.map((pokemon: any, index: number) => {
        console.log(pokemon);
        return <PokemonCard key={index} pokemon={pokemon} />
    })
    return (
        <div className='pokedex'>
            {/* <div className="search">
                <input type="text" placeholder="Search Pokemon" />
                <button>Search</button>
            </div> */}
            <h1 className='title'>Pokemon List</h1>
            {/* <div className="genList">
                <button className='gen' onClick={getPokemonList}>Tất cả</button>
                <button className='gen'>Gen 1</button>
                <button className='gen'>Gen 2</button>
                <button className='gen'>Gen 3</button>
                <button className='gen'>Gen 4</button>
                <button className='gen'>Gen 5</button>
                <button className='gen'>Gen 6</button>
                <button className='gen'>Gen 7</button>
                <button className='gen'>Gen 8</button>
                <button className='gen'>Gen 9</button>
            </div> */}
            <div className="cardList">
                {/* <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard /> */}
                {poke}
                {/* <div className='loading'>Loading...</div>  */}
                {loading ? <div className='loading'>Loading...</div> : ''}
            </div>
            <div className="tabList">
                <button onClick={getPokemonList}>Tải thêm</button>
                {/* <button>Trang sau</button> */}
            </div>
        </div>
    )
}

export default Pokedex