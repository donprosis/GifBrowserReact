import { useState } from "react";


export const AgregarCategoria =({ setCategories })=>{

    const [inputValue, setInputValue] = useState('Deamon Slayer');

    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }

    const onSubmit=(event)=>{
        event.preventDefault();
    
        setCategories(categories=>[inputValue,...categories]);

       setInputValue("");

    }

    return(
        <form onSubmit={ (event) => onSubmit(event) }>
          <input
          id="textos"
           type="text"
           placeholder="buscar" 
           value={inputValue} 
           onChange={onInputChange}
           />
        </form>
    )
}