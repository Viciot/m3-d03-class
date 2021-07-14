/*
 * Example of movie object
 *      {
      "_id": "1ae23ef2",
      "title": "Star Wars",
      "director": "George Lucas",
      "hasOscars": true,
      "IMDBRating": 8.7
    }
 */

    import React , {useState} from 'react'

    import moviesData from '../movies-data.json'
    
    import MovieCard from './MovieCard'
    
    
    export default function MoviesList(){
        const [movies, setMovies] = useState(moviesData)
    
        {/**
            * To modify state I MUST only use the callback function form useState
            so if I want to delete sometihng I need to create a helper function
            that modifies the array before setting the state witht the updated value
        */}
    
        function deleteMovie(movieId){
            const updatedMoviesArray = movies.filter(movie => movie._id !== movieId)
            setMovies(updatedMoviesArray)
        }
    
        
        return(
            movies.map((movie, idx)=>{
                return(
                    <MovieCard key={idx} movie={movie} handleDelete={deleteMovie}/>
                )
            })
        )
    }