import {useContext, useEffect} from "react";
import ShowsContext from "../context/shows/showsContext";
import film__icon from '../img/videl.jpg'
import {NavLink, useParams} from "react-router-dom";


const SinglePage = ({match}) => {
    const {getSingleShow, singleShow, loading} = useContext(ShowsContext);
    const { id } = useParams()

    useEffect(() => {
        getSingleShow(id);
        console.log(singleShow)
    }, []);

    const removeTags = (text) => {
        if (text === null || text === "") {
            return false;
        } else {
            text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "")
    };

    return (
        <>
            {
                loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>
                        <NavLink className='singleShow__back' to='/home'>Back</NavLink>
                        <div className='singleShow'>
                            <div className="singleShow__rows">
                                <div className="singleShow__row singleShow__row-1">
                                    <img src={singleShow.image ? singleShow.image.medium : film__icon} alt={singleShow.name}/>
                                </div>
                                <div className="singleShow__row singleShow__row-2">
                                    <div className='singleShow__info'>
                                        <div className="singleShow__info-name">
                                            {singleShow.name}
                                        </div>
                                        <div className="singleShow__info-status">
                                            <span>Status:</span> {singleShow.status}
                                        </div>
                                        <div className="singleShow__info-officialSite">
                                            <a href={singleShow.officialSite}>
                                                <span>Offical site:</span> Click here...
                                            </a>
                                        </div>
                                        <div className="singleShow__info-summary">
                                            <span>Summary: </span>{singleShow.summary === "" ? 'no description' : singleShow.summary}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </>


                )}
        </>
    )
}


export default SinglePage