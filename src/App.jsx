import React from 'react'
import {Routes,Route} from "react-router-dom";
import Contacts from './components/Contacts';
import AddContacts from './components/AddContacts';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Contacts/>}/>
    <Route path='/add' element={<AddContacts/>} />
   </Routes>
  )
}

export default App