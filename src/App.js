import React, { useContext } from 'react';
import Header from './components/header/header';
import SearchBar from './components/searchBar/SearchBar';
import Forecast from './components/Forecast/Forecast';
import { SelectedOptionProvider, SelectedOptionContext } from './Context/SelectedOptionContext';


function App() {

      return(
        <SelectedOptionProvider>
          <AppContent/>
        </SelectedOptionProvider>
      )
}
  function AppContent(){

    const { forecast, submitRequest } = useContext(SelectedOptionContext)
  const onSubmit = (value) =>{
    submitRequest(value)
  }
  return (
    <>
      
        <Header title = "WEATHER FORECAST (5 DAYS)"/>
        <SearchBar submitSearch={onSubmit}/>
        {forecast && <Forecast forecast = {forecast}/>}
      </>
    )
}

export default App;

