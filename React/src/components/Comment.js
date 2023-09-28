import styles from "./Comment.scoped.css";
import ReactStars from "react-rating-stars-component";
function Comment(props) {
    const {data} = props
    return (
        <div className="background">
            <div className="container-info">
                <img src="/krit.svg" alt="" className="pic-pro" />
                <div className="container-name">
                    <p className="name">name</p>
                    <ReactStars count={5} edit={false} value={data?.point ?? 3.5} isHalf={true} size={17} activeColor="#D3C3AF" className="star" />
                </div>
            </div>
            <p className="comment">comment</p>
            <div className="bottom">
                <img src="./Bally.png" alt="" className="pic"/>
                <div className="like">

                </div>

            </div>
        </div>









    );
};
export default Comment