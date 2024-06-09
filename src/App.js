import ImageList from './Components/ImageList'
import { useState } from 'react'
import searchImages from "./api"
import SearchBar from "./Components/SearchBar"

function App() {
    const [images,setImages] = useState([])
    const handleSumit =async (term)=>{
        const result = await searchImages(term)

        setImages(result)
    }

    return <div>
        <SearchBar onSubmit={handleSumit}/>
        <ImageList images={images}/>
    </div>
}

export default App