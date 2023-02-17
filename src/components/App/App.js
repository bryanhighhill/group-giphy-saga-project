import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import { useSelector } from 'react-redux';


function App(props) {
  const searchResults = useSelector(store => store.searchResults);
  
  return (
    <>
      <h1>Giphy Search!</h1>
      <SearchBar />
      
      <div>
        {searchResults.map(result => {
          return (
            <div key={result.id}>
              <img 
                src={result.url}
              />
            </div>
          )
        })
        }

      </div>
    </>
  )
}

export default App;
