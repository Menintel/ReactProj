import Btn_yl from "./Buttons/Btn_yl";
import PropTypes from 'prop-types'
import gpt2 from "./assets/gpt2.png"


function CardProps(props){
    return(
        <div className = "cardProps">
            <img className = "cardProps-img" src={props.logo} alt="broken img" />
            <h5 className = "cardProps-title">Icon : {props.name}</h5>
            <p className = "cardProps-text">Rating : {props.rate}</p>
            <Btn_yl text = "Click Me" />
        </div>
    );
}

CardProps.propTypes = {
    logo : PropTypes.img,
    name : PropTypes.string,
    rate : PropTypes.number
}

CardProps.defaultProps = {
    logo : gpt2,
    name : "Default Icon",
    rate : 0
}

export default CardProps