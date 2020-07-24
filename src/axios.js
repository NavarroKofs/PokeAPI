import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from './config'

const Axios = async (busqueda) => {
    let config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        content: JSON.stringify(busqueda)
    }
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.defaults.headers.post['Accept'] = 'application/json'
    axios.defaults.content = JSON.stringify(busqueda)
    let response = await axios.post(`${url}`)
    let json = await response.json()
    return json
}

export default Axios