import React from 'react'
import NavBar from '../components/NavBar'
import Background from '../components/Background'
import HeroBanner from '../components/HeroBanner'
import axios from 'axios'
import url from '../config'
import PokemonList from '../components/PokemonList'

class Pokemon extends React.Component {

    state = {
        data: [],
        error: null
    }

    async componentDidMount(){
        try {
            let array = []
            await axios.get(`${url}/api/v2/pokemon?limit=30`).then(async response => {
                for (let index = 0; index < 30; index++) {
                    let name = response.data.results[index].name
                    let url = response.data.results[index].url
                    await axios.get(url).then(async response => {
                        let image = response.data.sprites.front_default
                        let json = {
                            name: name,
                            image: image
                        }
                        array.push(json)
                    })
                }
                this.setState({
                    data: array
                })
                console.log(this.state.data)
            })
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    render(){
        if (this.state.error)
            return (<h1>Error</h1>)
        return (
            <React.Fragment>
                <Background />
                <NavBar/>
                <HeroBanner 
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"}
                />
                <PokemonList
                    data={this.state.data}
                />
            </React.Fragment>
        )
    }
}

export default Pokemon