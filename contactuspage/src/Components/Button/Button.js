
import './Button.css';
const Button =(props)=>{

    return(
        <button className={props.isoutline ? 'outline_btn' : 'primary_btn'}>
            {props.text}
        </button>
    );
};

export default Button;