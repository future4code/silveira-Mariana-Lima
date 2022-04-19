import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css'

function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})

    const pegaPokemon = pokeName => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((response) => {
                setPokemon(response.data)
            }).catch(err => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [props.pokemon])

    return (
        <div className='container'>
            <div className='cardName'>
                <p><span className='negrito'>Nome:</span></p>
                <p>{pokemon.name}</p> 
            </div>
            <div className='cardName'>
                <p><span className='negrito'>Peso:</span></p>
                <p>{pokemon.weight} kg</p>
            </div>
            <div className='cardName'>
                <p><span className='negrito'>Categoria:</span></p>
                {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            </div>
            
           
            
            {pokemon.sprites && (
                <img className='img' src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    )
}

export default PokeCard;