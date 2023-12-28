import axios from "axios"



const searchImages = async (term) => {

    const response = await axios.get("https://bendita-corteza-default-rtdb.firebaseio.com.json", {
        headers:{
            Authorization: "Client-ID AIzaSyCcI4Sp_csvecsPJEhVArpOudCpZR_CuFE"
        },
        params:{
            query: term 
        }
    })

    return response.data.results
}

export default searchImages