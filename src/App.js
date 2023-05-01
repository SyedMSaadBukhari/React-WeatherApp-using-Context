import React from 'react';
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';
import useForecast from './hooks/useForecast';
import Error from './components/Error/Error';
import Forecast from './components/Forecast/Forecast';



function App() {
  const {isError, forecast, submitRequest } = useForecast();
  const onSubmit = (value) =>{
    submitRequest(value)
  }
  return (
    <>
      <Header title = "WEATHER FORECAST (5 DAYS)"/>
      <SearchBar submitSearch={onSubmit}/>
      {isError && <Error message={isError}/>}
      {forecast && <Forecast forecast={forecast}/>}
      
      </>
    )
}

export default App;
