import React from 'react';
  
const Cats = (props) => {
  console.log(props);

  props.onSearch('cats');


  let photos = [];

  const results = props.data
  if (results) { 
    photos = results
  }

  let imgs = photos.map(img => 
    <li key={img.id}>
      <img src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} alt='' />
    </li>
  );

  return(
    <div className="photo-container">
      <h1>CATSsssssss</h1>
      <ul>
        {imgs}
      </ul>
    </div>
  )  
}

export default Cats;
