import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

const setError = ({message})=>{
    
        <div className='errorMessage'>
            {message} 
        </div>
}

Error.protoTypes = {
    message : PropTypes.string
};

Error.defaultProps = {
    message : 'An Error Occured'
};

export default setError;
