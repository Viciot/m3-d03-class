import React from 'react'


export default function MovieCard(props){
    const {
        handleDelete,
        movie: {
            _id,
            title,
            director,
            IMDBRating
        }
    } = props
    
    return(
        <div className="MovieCard" >
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating}</p>
            <button
              className='btn-delete'
              onClick={()=>handleDelete(_id)}
            >
                Delete 🗑
            </button>
        </div>
    )
}
