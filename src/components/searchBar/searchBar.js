import React, { useState, useContext } from 'react';
import { SelectedOptionContext } from '../../Context/SelectedOptionContext';
import './searchBar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faSearch} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';



const SearchBar = ({submitSearch})=>{
    const [isActive, setIsActive]= useState(false);
    const {selectedOption, setSelectedOption, options} = useContext(SelectedOptionContext);
    const [searchItem, setSearchItem] = useState('');
    const onSubmit = e =>{
        e.preventDefault();
        if (!searchItem || searchItem === '') return
        submitSearch(searchItem)
        
    }
    // console.log(selectedOption)
    
    return(
        <>
            
            <div className='wrapper'>
                <h2>City Name e.g Islamabad | City Id e.g 1176615 | Zip Code e.g 44000,pk </h2>
                <div className='searchBox'>
                    <div className='dropdown-menu'>
                        <div className='defaultOption' onClick={(e)=>
                            setIsActive(!isActive)
                        }>{selectedOption}</div>
                        <FontAwesomeIcon className='dropDown-Icon' icon={faCaretDown} onClick={(e)=>
                            setIsActive(!isActive)
                        } ></FontAwesomeIcon>
                        {isActive &&(
                            
                            <div className='option-list'>
                                {options.map((option, index) =>(
                                    <div className='options' key={index} onClick={e => {
                                        setSelectedOption(option)
                                        setIsActive(false)}}>
                                    {option}
                                    </div>
                                ))}
                                
                            </div>
                        )}
                    </div>
                    <div className='searchField'>
                        <input  type='text' 
                                className='input' 
                                placeholder='Search Item' 
                                value={searchItem}
                                onChange={e=>setSearchItem(e.target.value)}
                                />
                        <FontAwesomeIcon className='searchIcon' icon={faSearch} onClick={onSubmit} ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        
        </>
    )
};
SearchBar.propTypes = {
    submitSearch: PropTypes.func.isRequired
};
export default SearchBar;