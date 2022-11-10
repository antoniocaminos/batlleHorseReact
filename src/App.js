import React from 'react';
import { ItemListContainer } from './Components/ItemLisContainer';
import { NavBar } from './Components/NavBar';
//import 'App.css';

export const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="hello user..." />
    </>
  )
}
export default App