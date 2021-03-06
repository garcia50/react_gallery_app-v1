//import the libraries

import React from 'react';

const Photos = ({ farm, server, id, secret, title }) => {
  //create li element and use parameters to access info
  return (
    <li>
      <img key={id} src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
    </li>
  );
}

export default Photos;