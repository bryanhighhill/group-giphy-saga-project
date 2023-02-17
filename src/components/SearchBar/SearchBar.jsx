import { useState } from 'react';
import { useDispatch } from 'react-redux';


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    
    const onSubmit = () => {
        dispatch({
            type: 'SEARCH_GIPHY',
            payload: searchTerm
        })
    }
    
    return(
        <>
            <form onSubmit={onSubmit}>
                <label>
                    Search GIPHY:
                    <input 
                        value={searchTerm} 
                        type="text" 
                        placeholder="search" 
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <button>Search</button>
                </label>
            </form>
        </>
    )
}

export default SearchBar;