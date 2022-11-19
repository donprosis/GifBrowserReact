import { useState,useEffect } from "react";

import {getGifs} from "../helpers/getGifs.js";

import { Gifitem } from "./Gifitem.jsx";


export const GifGrid =({category})=>{

    const [images, setImages] = useState([]);
    useEffect( ()=>{
      getGifs(category)
      .then(newImages=> setImages(newImages));
      
        

    },[ ])
   
    return(
        <div> 
                 <h3 >{category}</h3>
    
                 <div className="card-grid">
            { images.map((image)=>(
                
                  <Gifitem
                  key={image.id}
                  url={image.url}
                  {...image}
                  />
                  

            ))}
           
           </div>
             
          
     </div>
    )
}