import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const {loading, data:images} = useFetchGifs(category);

    return (
        <div className = "GifGrid">
            <h3>{category}</h3>
            {loading && <p>Cargando</p>} 
            <div className='card-grid'>
                {
                    images.map((img) =>(
                        <GifGridItem 
                        {...img}
                        key = {img.id}
                        />
                        ))
                }
            </div> 
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}