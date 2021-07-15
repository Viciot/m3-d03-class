import React, { useState } from "react";

function AddMovie(props) {
  
  const initialState =   {
    title: 'Hello Pizza Bytes',
    director: 'Pizza Bytes Team',
    IMDBRating: 0,
    hasOscars: true
  }

  const [formState, setFormState] = useState( initialState )


  function handleChange(event){
    setFormState( { ...formState, [event.target.name]: event.target.value } )
  }

  function handleCheckBoxChange (event) {
    setFormState({ ...formState, hasOscars: event.target.checked})
  }

  function handleOnSubmit(event){
    event.preventDefault();
    console.log(formState)
    props.addMovieHandler(formState)
    setFormState( initialState )
  }

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleOnSubmit} >
        <label>Title:</label>
        <input type="text" name="title" value={formState.title} onChange={handleChange} />

        <label>Director:</label>
        <input type="text" name="director" value={formState.director} onChange={handleChange} />

        <label>IMDB Rating:</label>
        <input type="number" name="IMDBRating" value={formState.IMDBRating} onChange={handleChange} />

        <label>Won Oscars:</label>
        <input type="checkbox" name="hasOscars" checked={formState.hasOscars} onChange={handleCheckBoxChange} />
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
