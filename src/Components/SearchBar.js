import './ImageList.css'
import { useState } from "react"


function SearchBar({onSubmit}){
    const[term,setTerm] = useState('')

    const handleFormSubmit =(event)=>{
        event.preventDefault()
        onSubmit(term)
    }
    const handleChange =(event)=>{
        setTerm(event.target.value)
       

    }
    

    return <div>
        <form onSubmit={handleFormSubmit}>
        <h1><center>Image Search Engine</center></h1>
        <h3>Search</h3>
        <input value={term} onChange={handleChange}/>
        </form>
        <p>create by Hasaranga</p>
        
        
    </div>
}

export default SearchBar