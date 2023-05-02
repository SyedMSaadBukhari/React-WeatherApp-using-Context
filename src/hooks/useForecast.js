import { useState } from "react";
import axios from 'axios';

const useForecast = ()=>{
    const [isError, setError] = useState(false);
    const [forecast, setForecast] = useState(null);
    //API Call
    const submitRequest = async (value) => {
        const key = 'c73aa228bfba692462f96e89080aa39a';
        console.log(value);
        let URL = '';
        if (isNaN(value)){
            URL = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${key}`;
        }
        else if (value && value.includes(",")){
            URL = `https://api.openweathermap.org/data/2.5/forecast?zip=${value}&units=metric&appid=${key}`;
        }
        else {
            URL = `https://api.openweathermap.org/data/2.5/forecast?id=${value}&units=metric&appid=${key}`
        }

        try{
            const response = await axios.get(URL);
            setForecast(response.data)
            console.log(response.data)
        }
        catch (error){
            setError(true)
        }
        
    };

    return {
        isError,
        forecast,
        submitRequest
    };
};
export default useForecast;