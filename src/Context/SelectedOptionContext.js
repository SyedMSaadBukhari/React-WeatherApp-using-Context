import { createContext} from 'react';
import useForecast from '../hooks/useForecast';



export const SelectedOptionProvider = ({children})=>{
    const {  forecast, submitRequest, selectedOption, setSelectedOption,options } = useForecast();
    
    // console.log(selectedOption)
    return(
        <SelectedOptionContext.Provider value={{selectedOption, setSelectedOption, options, forecast, submitRequest}}>
            {children}
        </SelectedOptionContext.Provider>
    )
};
export const SelectedOptionContext = createContext('');
