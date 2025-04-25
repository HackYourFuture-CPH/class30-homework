import React from "react";


const AopPage = async()=>{
  const API_KEY = "Aad2U9AVlZ8smEZUr17wJ5kKcKjbBbWB1f4VVrmP";
  const response= await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  if (!response.ok){
    return <p> data went wrong</p>
  }
  const apod = await response.json();
  return(
    <div style={{ padding: '2rem', textAlign: 'center'}}>
      <h1>{apod.title}</h1>
      <p>{apod.date}</p>

      {apod.media_type==="image"? (
        <img src={apod.url} alt={apod.title} style={{maxWidth: '100%'}}/>
      ):(
        <iframe
        src={apod.url}
        width="100%"
        height="500"
       
        allow="encrypted-media"
        allowFullScreen
        title="NASA Video"
      />
      )}
      <p style={{marginTop:"1rem"}}>{apod.explanation}</p>
      
    
    </div>
  );
};

export default AopPage




