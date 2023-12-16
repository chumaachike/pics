import axios from "axios";

const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID dLOM3wo6kvKPoCpGw17qeGM9A1k4SOy-Ew5HZgaXYBE'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;