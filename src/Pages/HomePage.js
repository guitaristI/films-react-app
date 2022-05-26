import SearchBar from "../Components/SearchBar";
import {useContext} from "react";
import ShowsContext from "../context/shows/showsContext";
import ListItem from "../Components/ListItem";
import film__icon from '../img/videl.jpg'

const HomePage = (props) => {

    const showsContext = useContext(ShowsContext);
    const { loading, shows} = showsContext;

    return <div className='homepage'>
        <div className="container">
            <SearchBar/>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div className='homepage__cards'>
                    {shows.map((item) => (
                        <ListItem
                            key={item.show.id}
                            id={item.show.id}
                            image={item.show.image ? item.show.image.medium : film__icon}
                            name={item.show.name}
                            rating={item.show.rating.average == null ? 'no-rating' : item.show.rating.average}
                        />
                    ))}
                </div>
            )}
        </div>

    </div>
}

export default HomePage