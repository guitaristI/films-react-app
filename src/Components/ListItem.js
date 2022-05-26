import {NavLink} from "react-router-dom";


const ListItem = ({ image, name, rating, id}) => {
    return (
        <NavLink to={`/singleShow/${id}`} className='list__item'>
            <img src={image} alt={name}  />
            <div className="list__item-info info">
                <h4 className="info__name">{name}</h4>
                <h4 className="info__rating">{rating}</h4>
            </div>
        </NavLink>
    )
}

export default ListItem;