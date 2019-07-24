import React from 'react';

const Photo = (props) => (
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      <li>
        <img src="{props.img}" alt="{props.alt}" id="{props.id}" />
      </li>
    </ul>
  </div>
);

export default Photo;
