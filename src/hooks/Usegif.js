import axios from 'axios';
import  { useEffect, useState } from 'react'

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Usegif = (tag) => {
    const [gif,setgif]=useState("");
    const[loading,setloading]=useState("false");
    const random=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const custom=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    async function fetchdata (tag){
        setloading(true);
        const {data}=await axios.get(tag ? custom : random);
        const imagesource=data.data.images.downsized_large.url;
        setgif(imagesource);
        setloading(false);
      }
      useEffect(()=>{
        fetchdata();
      },[])

      return{gif,loading,fetchdata};
}

export default Usegif
