import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pokemon from '../pages/Pokemon'
import NotFound from '../pages/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/prueba" component={Pokemon}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App