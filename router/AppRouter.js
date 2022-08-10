import React from 'react'
import { BrowserRouter as Router,Route , Switch} from 'react-router-dom'
import AddTrainerForm from '../components/AddTrainerForm'
// wrapped trainerslist in brackets and it worked to import. It didn't before for some reason.
import {TrainersList} from '../components/TrainersList'

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/add'>
        <AddTrainerForm />
      </Route>
      <Route path="/">
      <TrainersList />
    </Route>
    </ Switch>
  )
}

export  default AppRouter