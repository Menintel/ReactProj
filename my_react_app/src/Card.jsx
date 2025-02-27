import profile from './assets/BPD7.jpeg'
import Button from './Button.jsx';
import Btn_yl from './Buttons/Btn_yl.jsx';


function Card(){
    return(
        <div className = "card">
             <img className = "card-img" src={profile} alt="broken profile picture" />
             <h2 className = "card-title">Eliud</h2>
             <p className = "card-text">I am learning to use react.</p> 
             <Button/>
             <Btn_yl text = "Yellow Btn" />
        </div>

    );
}

export default Card