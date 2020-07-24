import React from 'react'
import url from '../config'
import Searcher from './Searcher'
import axios from 'axios'
import NavBar from '../components/NavBar'
import Background from '../components/Background'
import HeroBanner from '../components/HeroBanner'

class SearcherContainer extends React.Component {
    
    state = {
        data: [],
        error: null,
        busqueda: '',
    }

    handleSubmit = async e => {
        e.preventDefault()
        try {
            let response = await axios.get(`https://cors-anywhere.herokuapp.com/${url}/api/v2/pokemon/${this.state.busqueda}`)
            this.setState({
                data: response
            })
        } catch (error) {
            this.setState({
                error
            })
            console.log(error)
        }
        console.log(this.state)
    }

    handleChange = e => {
        this.setState({
            busqueda: e.target.value
        })
    }

    render(){
        if (this.state.error)
            return (<h1>Error</h1>)
        return (
        <React.Fragment>
            <Background />
            <NavBar/>
            <HeroBanner />
            {/* <Searcher
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                busqueda={this.state.busqueda}
            /> */}
        </React.Fragment>
        )
    }
}

export default SearcherContainer