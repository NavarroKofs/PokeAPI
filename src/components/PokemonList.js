import React from 'react'
import Card from './Card'
import axios from 'axios'

const PokemonList = ({data}) => (
    <div className="pokemonList">
        {
            data.map((pokemon) => {
                return (
                    <Card
                        name={pokemon.name}
                        image={pokemon.image}
                    />
                )
            })
        }
    </div>
)

export default PokemonList