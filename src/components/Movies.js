import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  
  {
    movies.map((item,index )=>{
return <div key={index}>{item.title}{item.time}
      <ul> <li>{item.genres}</li></ul>
</div>
      


    })

  }

  
  </div>;
}

export default Movies;
