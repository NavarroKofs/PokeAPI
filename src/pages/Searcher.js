import React from 'react'
import Form from '../components/Form'

const Searcher = ({ onSubmit, onChange, busqueda }) => {
    return (
        <div>
            <Form
                onSubmit={onSubmit}
                onChange={onChange}
                busqueda={busqueda}
            />
        </div>
    )
}

export default Searcher