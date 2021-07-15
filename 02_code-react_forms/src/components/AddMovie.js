import { useState } from "react";

function AddMovie(props) {

  const [movieTitle, setMovieTitle] = useState('Hello Pizza Bytes')
    
  
  function handleTitleChange(event){
    setMovieTitle(event.target.value)
    console.log(event.target.value)
  }
  
  function handleOnSubmit(event){
  event.preventDefault();
    const newMovie = {title: movieTitle}
    console.log(newMovie)
    props.addMovieHandler(newMovie)
}
  

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleOnSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={movieTitle} onChange={handleTitleChange}/>

        <label>Director:</label>
        <input type="text" name="director" />

        <label>IMDB Rating:</label>
        <input type="number" name="IMDBRating" />

        <label>Won Oscars:</label>
        <input type="checkbox" name="hasOscars" />
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
