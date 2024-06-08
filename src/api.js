import axios from "axios"



const searchImages = async (term)=>{
    const responce =await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID _OMCWjs4cqKwhYeFUtuQiFHR3JcS6mlToJWD8qvhBjM'


        },
        params:{
            query: term
        }

    })
    
    return responce.data.results;
}

export default searchImages;