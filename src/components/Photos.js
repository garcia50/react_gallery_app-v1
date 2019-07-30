import React from 'react';

const Photos = ({ farm, server, id, secret, title }) => {
  return (
    <li>
      <img key={id} src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
    </li>
  );
}

export default Photos;
