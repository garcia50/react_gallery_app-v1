import React from 'react';

const Home = props => {
  cosnt results = props.data; 
  let imgs = results.map(img => 
    <li>
      <img src={img.data.data.src} />
    </li>
  );

  return(
    <ul class="photo-container">
      <h2>Results</h2>
      {imgs}
    </ul>

  )

}

export default Home;