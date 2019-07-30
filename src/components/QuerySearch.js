import React from 'react';
import NotFound from './NotFound';
import Gallery from './Gallery'

const QuerySearch = props => {
  console.log('prrrrroproprop', props);

  let query = props.search(props.query.params.query)
  console.log('quereryeyreyr', query);


  let array = props.data
  console.log('aarrayrayry', array);

  // render() {
  //   return(
  //     <Gallery query={props.data} /> 
  //   )  
  // }

}

export default QuerySearch