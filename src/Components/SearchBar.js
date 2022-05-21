import {useState} from "react";


const SearchBar = props => {
    const [searchTerm, setSearchTerm] = useState('')

    const onSearchHandler = (e) => {
        e.preventDefault()

        console.log(searchTerm)
    }

    return <div className='search'>
        <form className='search__form'>
            <input type="text" placeholder={'Search For films'}
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="search__btn">
                <button onClick={onSearchHandler}>
                    Search
                </button>
            </div>

        </form>
    </div>
}

export default SearchBar