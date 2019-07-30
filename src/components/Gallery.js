import React from 'react';
import NotFound from './NotFound';
  
const Gallery = (props) => {
  const results = props.data
  let photos;

  if (results.length > 0) { 
    photos = results.map(img => 
      <li key={img.id}>
        <img src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} alt='' />
      </li>
    );
  } else {
    photos = <NotFound />
  }

  return(
    <div className="photo-container">
      <h1>{props.title}</h1>
      <ul>
        {photos}
      </ul>
    </div>
  )  
}

export default Gallery;
 