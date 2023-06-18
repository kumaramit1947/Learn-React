import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

const RestaurantCard = ({cardData:{resName, dishTag, stars, time, resImage}}) => {
    return (
        <div className="res-card">
            <div className="image-container">
                <img className="res-image"
                    src= {resImage}/>
            </div>
            <div className="info-container">
                <h3 className="res-title">{resName}</h3>
                <h4 className="dish-tag">{dishTag}</h4>
                <p className="analytics">
                    <span className="stars"><AiOutlineStar /> {stars} stars</span>
                    <br/>
                    <span className="time"><AiOutlineClockCircle /> {time}</span>
                </p>
            </div>
        </div>
    )
}
export default RestaurantCard;