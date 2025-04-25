"use client"

import React, {useEffect,useState} from "react"




const MarsClient=()=>{
  const [photos , setPhoto]=useState([]);

  useEffect(()=>{
 
      const API_KEY = "Aad2U9AVlZ8smEZUr17wJ5kKcKjbBbWB1f4VVrmP";
       fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
       .then(res=> res.json())
       .then(data=>{
        setPhoto(data.photos.slice(0,10));
       })
      },[]);
        
    

return (
  <div style={{ padding:"1rem" }}>
    <h2>photo of mars</h2>
    {photos.map((photo:any)=>(
      <div key={photo.id} style={{border:"1px solid #ccc", padding:"1rem", borderRadius:"10px"}}>
        <img src={photo.img_src} alt="mars" style={{ width: '100%', borderRadius: '8px' }} />
        <p><strong>Rover:</strong> {photo.rover.name}</p>
        <p><strong>Camera:</strong> {photo.camera.full_name}</p>
        <p><strong>Earth Date:</strong> {photo.earth_date}</p>
      </div>
    ))}
    
  </div>
);
};


export default MarsClient;
