import {useContext, useEffect, useState} from "react";
import ShowsContext from "../context/shows/showsContext";
import  search from '../img/search.png'

const SearchBar = props => {
    useEffect( () => {
        const input = document.getElementById('text');
        input.addEventListener('keyup', (e) => {
            if (e.code === 'Enter') {
                onSearchHandler()
            }
        })
    })

    const [searchTerm, setSearchTerm] = useState('');
    const showsContext = useContext(ShowsContext)
    const { searchShows } = showsContext;

    const onSearchHandler = (e) => {
        e.preventDefault()

        searchShows(searchTerm)

        console.log(searchTerm)
    }


    return <div className='search'>
        <div className='search-box'>
            <img src={search} alt=""/>
            <input type="text" id='text' placeholder={'Enter movie name...'}
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="search__btn">
                <button onClick={onSearchHandler}>
                    Search
                </button>
            </div>

        </div>
    </div>
}

export default SearchBar;