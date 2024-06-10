import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({movies ,searchTitle}) => {
  return (
    <div style={{display:"flex" , justifyContent: "space-around", flexWrap:"wrap"}}>
      {movies
      .filter(el=>el.title.toLowerCase().includes(searchTitle.toLowerCase()))
      .map(el=><MovieCard movie={el} key={el.id} />)}
    </div>
  )
}

export default MovieList


