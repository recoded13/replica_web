import ButtonApple from "../Moleculas/molec_button_apple";
import ButtonPlayStore from "../Moleculas/molec_button_playsstore"
import './download_2botones_style.css'

const Download_2botones = () => {
    return (
        <div className="Download_2botones">
            <ButtonApple />&nbsp; &nbsp; 
            <ButtonPlayStore />
        </div>
    )
}

export default Download_2botones;