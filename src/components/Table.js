import React from 'react'

const Table = ({resources}) => (
    <div>
      <table >
        <thead>
            <tr>
                <th align="center">Selección</th>
                <th align="center">Título</th>
                <th align="center">Descripción</th>
                <th align="center">Visualización</th>
            </tr>
        </thead>
        <tbody>
            {
                resources.map((resource) => (
                    <tr key={resource.id}>
                        <th scope="row"></th>
                        <th align="center"></th>
                        <th align="center"></th>
                        <th align="center"></th>
                        <th align="center"></th>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
)

export default Table