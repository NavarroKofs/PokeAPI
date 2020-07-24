import React from 'react'

const Form = ({ onSubmit, onChange }) => (
    <div>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                id="campo_busqueda"
                name="consulta"
                onChange={onChange}
            />
            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    </div>
)

export default Form