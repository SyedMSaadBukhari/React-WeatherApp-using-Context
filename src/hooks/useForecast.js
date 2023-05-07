import { useState } from "react";
import axios from 'axios';


const useForecast = ()=>{
    const [forecast, setForecast] = useState(null);
    const [selectedOption, setSelectedOption] = useState('SearchBy');
    const options = ['City Name','City Id','Zip Code'];

    //API Call
    const submitRequest = async (value) => {
        const key = 'c73aa228bfba692462f96e89080aa39a';
        let URL = '';
        // console.log(selectedOption)
        if (selectedOption === 'City Name' && (!value.includes(",")) ){
            URL = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${key}`;
        }
        else if (selectedOption === 'City Id' ){
            URL = `https://api.openweathermap.org/data/2.5/forecast?id=${value}&units=metric&appid=${key}`;
        }
        else if(selectedOption === 'Zip Code' && (value && value.includes(","))) {
            URL = `https://api.openweathermap.org/data/2.5/forecast?zip=${value}&units=metric&appid=${key}`;
            
        }
        else{
            console.log("Invalid")
            
            return
        }
        

        try{
            const response = await axios.get(URL);
            setForecast(response.data)
            console.log(response.data)
        }
        catch (error){
            return error;
        }
        
    };

    

    return {
        selectedOption,
        forecast,
        setSelectedOption,
        options,
        submitRequest
    };
};

export default useForecast;
