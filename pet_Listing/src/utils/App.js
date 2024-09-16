// src/App.js

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PetList from './components/PetList'
import PetDetails from './components/PetDetails'
import SearchForm from './components/SearchForm'
import ErrorBoundary from './components/ErrorBoundary'
import { PetProvider } from './context/PetContext'

function App() {
  return (
    <Router>
      <PetProvider>
        <ErrorBoundary>
          <SearchForm />
          <Switch>
            <Route exact path="/" component={PetList} />
            <Route path="/pets/:id" component={PetDetails} />
          </Switch>
        </ErrorBoundary>
      </PetProvider>
    </Router>
  )
}

export default App
