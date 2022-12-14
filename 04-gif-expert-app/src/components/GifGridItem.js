import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url}) => {
    
    return (
        <div className="card animate__animated animate__fadeInDown">
            <p className='TituloGifs'>{title}</p>
            <img src = {url} alt = {title}></img>
        </div>
    )
}

GifGridItem.protoTypes = {
    tittle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired

}