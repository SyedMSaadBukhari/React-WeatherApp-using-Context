import React, { useState } from 'react';
import './Forecast.scss';

const weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday' ];
const Forecast = ({forecast})=>{

        const [selectedDay, setSelectedDay]= useState();
        const [unit, setUnit] = useState('C');
        if(!forecast){
            return null;
        }
        const currentDate = new Date();
        const forecastDays=[];
        for(let i = 0; i < 5; i++){
            const forecastDate = new Date(currentDate);
            forecastDate.setDate(forecastDate.getDate()+i);
            forecastDays.push(weekDays[forecastDate.getDay()]);
        }

        const upcomingDays = forecast.list.reduce((acc , item)=>{
            const itemDate = new Date(item.dt_txt);
            const itemDay = weekDays[itemDate.getDay()];
            if (!acc[itemDay]){
                acc[itemDay]= item;
            }
            return acc;
        },{});

        const handleDayClick = (day)=>{
            setSelectedDay(day);
        }

        const toggleUnit = ()=>{
            setUnit(unit === 'C' ? "F" : 'C')
        }
        const selectedDayData = selectedDay ? upcomingDays[selectedDay] : upcomingDays[weekDays[currentDate.getDay()]];
        
        const temp = unit === 'F' ? (selectedDayData.main.temp * 9/5) +32 : selectedDayData.main.temp;

        const convertToFahrenheit = (celcius) =>{
            return (celcius * 9/5) + 32;
        }
        
    return(
        <>
        <div className='currentDay-wrapper'>
            <ul className='titleDescription'>
            <li className='currentCityName'>{forecast.city.name},{forecast.city.country}</li>
            <li className='currentDay'>{selectedDay || weekDays[currentDate.getDay()]}</li>
            <li className='condition'>{selectedDayData.weather ? selectedDayData.weather[0].description : ''}</li>
            </ul>
            
        
            <div className='weatherDescription'>
            <img alt='weathericon' className='icon' src={`icons/${selectedDayData.weather ? selectedDayData.weather[0].icon : ''}.png`}/>
            <div className='temperature'>{Math.round(temp)}°</div>
            <div className='celcius' onClick={toggleUnit}>{unit}</div>
            <div className='separator'>|</div>
            <div className='fahrenheit' onClick={toggleUnit}>{unit === 'C' ? 'F' : 'C'}</div>
            

            <div className='description-wrapper'> 
                <ul className='detailedDescription'>
                <li className='pressure'>Pressure: {selectedDayData.main.pressure} hPa</li>
                <li className='humidity'>Humidity: {selectedDayData.main.humidity} %</li>
                <li className='wind'>Wind Speed: {selectedDayData.wind.speed} m/s</li>
                </ul>
            </div>
            </div>
        </div>

        <div className='upcomingDays-wrapper'>
            {forecastDays.map((day)=>
                (
                <div key={day} className={`card ${day === selectedDay ? 'selected' : ''}`} onClick={() => handleDayClick(day)} >                 
                <div className='day'>{day}</div>
                {upcomingDays[day] && upcomingDays[day].weather ? (
                <>
                    <img alt='weatherIcon' className='card-icon' src={`icons/${upcomingDays[day].weather[0].icon}.png`} />
                    
                    
                    <div className='min-max'>
                        { unit === 'C'
                            ? `${Math.round(upcomingDays[day].main.temp_min)}°  ${Math.round(upcomingDays[day].main.temp_max)}°`
                            : `${Math.round(convertToFahrenheit(upcomingDays[day].main.temp_min))}°  ${Math.round(convertToFahrenheit(upcomingDays[day].main.temp_max))}°`
                        
                        }
                        
                    </div>
                </>
                ) : (
                <div className='no-data'>No data available</div>
                )}
                </div>
                    
            ))}

        </div>
        </>
    )

}

export default Forecast;