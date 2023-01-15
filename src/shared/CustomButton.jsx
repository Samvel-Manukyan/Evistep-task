import './styles/CustomButton.scss';

const CustomButton = ({text, width}) => {
    return(
        <div style={{width: width}} className="custom-button">
            {text}
        </div>
    );
}

export default CustomButton;
