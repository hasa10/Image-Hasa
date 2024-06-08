import SearchBar from "./Components/SearchBar"

function App() {
    const handleSumit = (term)=>{
        console.log('Do a search with',term);
    }

    return <div>
        <SearchBar onSubmit={handleSubmin}/>
    </div>
}

export default App