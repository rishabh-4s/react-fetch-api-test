import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosComponent() {
  const [data, setData] = useState([]);


    const getData = async ()=>{
        const response = await axios.get("http://3.109.217.14:3000/api/hello")
        
        setData(response.data);
        // console.log(response.headers)
    }
    useEffect(()=>{
        getData();
    }, []);
  

  return (
    <div>
        <h1>hwllo</h1>
      {data.message}
    </div>
  );
}

export default AxiosComponent;
