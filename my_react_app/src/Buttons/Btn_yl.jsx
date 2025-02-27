import styles from './Button.module.css'

function Btn_yl(props){
    return(
        <button className = {styles.btn_yl} >{props.text}</button>
    );

}

export default Btn_yl