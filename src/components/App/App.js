import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';


function App(props) {

  // useEffect(() => {
  //   axios.get('/giphy').then((response) => {
  //     console.log('get response data: ', response.data);
  //   }).catch(err => {
  //     console.log('error with get request: ', err);
  //   });
  // }, []);

  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchBar />
    </div>
  )
}

export default App;
