import React, { useEffect, useState } from 'react'
import './PokemonDetail.css'
import { useParams } from 'react-router-dom';
type Props = {}

const PokemonDetail = (props: Props) => {
  // Lấy id từ url
  const { id } = useParams();
  console.log(id);
  const [pokemonData, setPokemonData] = useState([]);
  // const dexNumber = pokemon.pokemon.url.split('/')[6];
  const [typeList, setTypeList] = useState([]);
  // const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexNumber}.png`
  const [image, setImage] = useState('https://icon-library.com/images/pokemon-ball-icon/pokemon-ball-icon-4.jpg');
  const getPokemonData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+id+'/');
      const data = await response.json();
      setPokemonData(data);
      setTypeList(data.types);
      // console.log(data);
      // console.log('type'+ (pokemonData as any).name);
      if(data.sprites.front_default === null || data.sprites.front_default === undefined) {}
      else
        setImage(data.sprites.front_default);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPokemonData();
    
  }, [])
  return (
    <div>
      <h1>Chi tiết pokemon</h1>
      <div className="pokemonDetail">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="info">
          <div className="name">
            <p>Tên: {(pokemonData as any).name}</p>
          </div>
          <div className="height">
            <p>Chiều cao: {(pokemonData as any).height}</p>
          </div>
          <div className="weight">
            <p>Cân nặng: {(pokemonData as any).weight}</p>
          </div>
          <div className="ability">
            <p>Khả năng: </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default PokemonDetail