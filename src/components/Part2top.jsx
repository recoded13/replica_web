import { NavLink } from "react-router-dom";
import redcircle from "../img/redcircle.svg";
import gallery001 from "../img/gallery001.jpg";
import gallery002 from "../img/gallery002.jpg";
import gallery003 from "../img/gallery003.jpg";
import gallery005 from "../img/gallery005.jpg";
import './part2top.css'


const Part2top = () => {
    return (

        <>
        <div className="container">
            <section className="gallery">
                <div className="gallery-pic">

                    <div className="red-circle"><img src={redcircle} alt="redcircle" /></div>
                    <div className="listBox">
                        <div className="gallery-container">
                            <header className="gallery-header">
                                <h1>My Picks</h1>
                                <li>Latest</li><li>Favorites</li>
                            </header>
                            <div className="pic">
                                <img src={gallery001} alt="glallery001" />
                                <img src={gallery001} alt="glallery001" />

                            </div>
                            <div className="pic">
                                <img src={gallery002} alt="glallery002" />
                                <img src={gallery002} alt="glallery002" />
                            </div>
                            <div className="pic">
                                <img src={gallery003} alt="glallery003" />
                                <img src={gallery003} alt="glallery003" />
                            </div>

                            <div className="pic">
                                <img src={gallery005} alt="glallery005" />
                                <img src={gallery005} alt="glallery005" />
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>

                </div>
                <div className="gallery-description">
                    <div className="description-container" >
                        <h2>Organize Your Time<br/>And Start Getting<br/>Results</h2>
                            <p>Sync is the first mobile app on the market to harness the power of social connections to help you stop procrastinating and start getting things done. Give it a try and see the changes right away.</p>
                            <li>Analyse and evaluate your current status and productivity</li>
                            <li>Begin monitoring your day to day routine with Sync app</li>
                            <li>See the improved results in no more than a couple of weeks</li>
                            <button>LIGHTBOX</button>
                        </div>
                </div>
            </section>
        </div>



        </>
    )
}

export default Part2top;