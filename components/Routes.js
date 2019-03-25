import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Form from './FormLogin.js'
import History from './History.js'

const Routes = () => (  
   <Router>
      <Scene key = "root">
         <Scene key = "form" component = {Form} title = "Form" initial = {true} hideNavBar={true}/>
         <Scene key = "history" component = {History} title = "History" hideNavBar={true}/>
      </Scene>
   </Router>
)
export default Routes