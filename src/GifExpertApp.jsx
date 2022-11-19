import { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoria";
import { GifGrid } from "./components/GifGrid";



export const GiftExpertApp =()=>{
const [categories, setCategories] = useState(['Deamon Slayer']);

    return(
        <>
        <h1>GiftExpertApp</h1>
        <AgregarCategoria setCategories={setCategories}/>
       {categories.map((category) =>{ 
            return( 
         <GifGrid key={category} category={category}/>
            )})}
        </>
)
}