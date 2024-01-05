import React, { useEffect, useState } from 'react'
import './PokemonCard.css'
const PokemonCard = (pokemon: any) => {
  // console.log(pokemon.pokemon);
  // Get pokemon list from API 
  const [pokemonData, setPokemonData] = useState([]);
  const dexNumber = pokemon.pokemon.url.split('/')[6];
  const [typeList, setTypeList] = useState([]);
  // const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexNumber}.png`
  const [image, setImage] = useState('https://icon-library.com/images/pokemon-ball-icon/pokemon-ball-icon-4.jpg');
  const getPokemonData = async () => {
    try {
      const api = pokemon.pokemon.url;
      const response = await fetch(api);
      const data = await response.json();
      setPokemonData(data.results);
      setTypeList(data.types);
      console.log(data);
      if(data.sprites.front_default === null || data.sprites.front_default === undefined) {}
      else
        setImage(data.sprites.front_default);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPokemonData();
    console.log(pokemonData);
  }, [])
  // Hiển thị typeList
  const types = typeList.map((type: any, index: number) => {
    if (type.type.name === 'grass') {
      return <button className='types grass'>Cỏ</button>
    }
    if (type.type.name === 'poison') {
      return <button className='types poison'>Độc</button>
    }
    if (type.type.name === 'fire') {
      return <button className='types fire'>Lửa</button>
    }
    if (type.type.name === 'water') {
      return <button className='types water'>Nước</button>
    }
    if (type.type.name === 'bug') {
      return <button className='types bug'>Bọ</button>
    }
    if (type.type.name === 'flying') {
      return <button className='types flying'>Bay</button>
    }
    if (type.type.name === 'normal') {
      return <button className='types normal'>Thường</button>
    }
    if (type.type.name === 'electric') {
      return <button className='types electric'>Điện</button>
    }
    if (type.type.name === 'ground') {
      return <button className='types ground'>Đất</button>
    }
    if (type.type.name === 'fairy') {
      return <button className='types fairy'>Tiên</button>
    }
    if (type.type.name === 'fighting') {
      return <button className='types fighting'>Giác Đấu</button>
    }
    if (type.type.name === 'psychic') {
      return <button className='types psychic'>Siêu Linh</button>
    }
    if (type.type.name === 'rock') {
      return <button className='types rock'>Đá</button>
    }
    if (type.type.name === 'steel') {
      return <button className='types steel'>Thép</button>
    }
    if (type.type.name === 'ice') {
      return <button className='types ice'>Băng</button>
    }
    if (type.type.name === 'ghost') {
      return <button className='types ghost'>Ma</button>
    }
    if (type.type.name === 'dragon') {
      return <button className='types dragon'>Rồng</button>
    }
    if (type.type.name === 'dark') {
      return <button className='types dark'>Bóng tối</button>
    }
    return <p className='types'>Unknown</p>
  })
  // Hiệu ứng loading khi chưa có dữ liệu
  if (pokemonData === null) return <div className='pokemonCard'>Loading...</div>

  return (
    <div>
      <div className="dexNumber"><p>#{dexNumber}</p></div>
      <div className='pokemonCard'>
        <img src={image} alt="pokemonsprite" />
        <div className="pokemonInfo">
          <h1>{pokemon.pokemon.name}</h1>

          {/* <p className='types'>Cỏ</p>
            <p className='types'>Độc</p> */}
          {/* Hiệu ứng loading */}
          <div className="typeList">
          {types.length === 0 ? <p className='types grass'>Đang tải...</p> : types}
          </div>
          {/* {types} */}
        </div>
        <button className='see'>See more</button>

      </div>
    </div>
  )
}

export default PokemonCard