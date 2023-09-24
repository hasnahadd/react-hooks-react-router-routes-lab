import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}
  <h1>Actors Page </h1>
  {
    actors.map((item,index )=>{
return <div key={index}>{item.name}
      <ul> <li>{item.movies}</li></ul>
</div>
      


    })

  }
    </div>;

}

export default Actors;
