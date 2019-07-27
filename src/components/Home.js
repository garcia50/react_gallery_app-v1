import React from 'react';
import { Consumer } from './Context';

const Home = () => {
  // console.log('checking Home props***', props);
  return (
    <Consumer>
      { context => {
        const test = context('fish');

        if (test) { 
          console.log('teseesesesettttt', test);
        }


        // let photos = []

        // const results = props.data.photos 
        // if (results) { 
        //   photos = results.photo;
        // }

        // let imgs = photos.map(img => 
        //   <li>
        //     <img src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} alt='' key={img.id} />
        //   </li>
        // );

        // return(
        //   <div className="photo-container">
        //     <h2>Results</h2>
        //     <ul>
        //       {imgs}
        //     </ul>
        //   </div>
        // )
      }}  
    </Consumer>
  )
}

export default Home;

