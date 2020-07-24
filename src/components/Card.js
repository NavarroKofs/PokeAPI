import React from 'react'

const Card = ({ image, name }) => (
    <figure className="card" style={{textTransform:"capitalize"}}>
        <img src={image} className="card-img"></img>
        <a href={image}>{name}</a>
    </figure>
)

export default Card