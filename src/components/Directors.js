import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
  <h1>Directors Page</h1>
  {
    directors.map((item,index )=>{
return <div key={index}>{item.name}
      <ul> <li>{item.movies}</li></ul>
</div>
      


    })

  }





  
  
  </div>;
}

export default Directors;
